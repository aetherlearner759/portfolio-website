import { memo, useEffect, useMemo, useRef, useState } from "react";
import style from "./ParticleBackground.module.css";
import useDarkMode from "@/hooks/darkmode/useDarkMode";

const MIN_SPEED_IN_PIXEL_PER_MS = 0.025;
const MAX_SPEED_IN_PIXEL_PER_MS = 0.1;
const MAX_DELAY_IN_MS = 2000;
const MIN_LIFETIME_IN_MS = 1750;
const MAX_LIFETIME_IN_MS = 4000;
const PARTICLE_SIZE = 1;
const LIGHT_MODE_RGB_COLORS = [
	"100, 100, 100",
	"200, 200, 0",
	"0, 200, 200",
	"200, 0, 200",
];
const DARK_MODE_RGB_COLORS = [
	"200, 200, 200",
	"200, 200, 0",
	"0, 200, 200",
	"200, 0, 200",
];
let CURRENT_RGB_COLORS = DARK_MODE_RGB_COLORS;

class Particle {
	private x: number = 0;
	private y: number = 0;
	private speedX: number = 0;
	private speedY: number = 0;
	private remainingLifeInMs: number = 0;
	private totalLifeInMs: number = 0;
	private delay: number = 0;
	private colorRGB: string = CURRENT_RGB_COLORS[0];

	reset(
		canvasWidth: number,
		canvasHeight: number,
		remainingLifeProportion: number = 1,
	) {
		this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
		const speed =
			MIN_SPEED_IN_PIXEL_PER_MS +
			Math.random() * (MAX_SPEED_IN_PIXEL_PER_MS - MIN_SPEED_IN_PIXEL_PER_MS);
		const dirRadians = Math.random() * 2 * Math.PI;
		this.speedX = Math.cos(dirRadians) * speed;
		this.speedY = Math.sin(dirRadians) * speed;
		this.totalLifeInMs =
			MIN_LIFETIME_IN_MS +
			Math.random() * (MAX_LIFETIME_IN_MS - MIN_LIFETIME_IN_MS);
		this.delay = Math.random() * MAX_DELAY_IN_MS;
		this.remainingLifeInMs = remainingLifeProportion * this.totalLifeInMs;
		this.colorRGB =
			CURRENT_RGB_COLORS[Math.floor(Math.random() * CURRENT_RGB_COLORS.length)];
	}

	update(deltaTimeInMs: number) {
		if (this.delay >= 0) {
			this.delay -= deltaTimeInMs;
			return;
		}
		this.x += this.speedX * deltaTimeInMs;
		this.y += this.speedY * deltaTimeInMs;
		this.remainingLifeInMs -= deltaTimeInMs;
	}

	get isLifeOver(): boolean {
		return this.remainingLifeInMs <= 0;
	}

	draw(drawingContext: CanvasRenderingContext2D) {
		if (this.delay >= 0) {
			return;
		}
		const lifeProportion =
			(this.totalLifeInMs - this.remainingLifeInMs) / this.remainingLifeInMs;
		const opacity = this.easeOut(lifeProportion) * 0.5;
		const size = this.easeOut(lifeProportion) * PARTICLE_SIZE;

		drawingContext.beginPath();
		drawingContext.fillStyle = `rgba(${this.colorRGB}, ${opacity.toString()})`;
		drawingContext.strokeStyle = `rgba(${this.colorRGB}, ${(opacity * 0.9).toString()})`;
		drawingContext.arc(this.x, this.y, size, 0, 2 * Math.PI);
		drawingContext.stroke();
		drawingContext.fill();
		drawingContext.closePath();
	}

	private easeOut(t: number): number {
		return Math.max(0, Math.min(1, 1 - Math.pow(t, 2)));
	}
}

function generateParticles(
	canvasWidth: number,
	canvasHeight: number,
	densityFactor: number,
): Particle[] {
	if (canvasWidth === 0 || canvasHeight === 0) {
		return [];
	}
	const result = [];
	const nParticles = Math.floor(canvasWidth * canvasHeight * densityFactor);
	for (let i = 0; i < nParticles; ++i) {
		const p = new Particle();
		p.reset(canvasWidth, canvasHeight, Math.random());
		result.push(p);
	}
	return result;
}

const ParticleBackground = memo(() => {
	const inDarkMode: boolean = useDarkMode()[0];
	const [canvasWidth, setCanvasWidth] = useState<number>(0);
	const [canvasHeight, setCanvasHeight] = useState<number>(0);
	const particles = useMemo(() => {
		return generateParticles(canvasWidth, canvasHeight, 0.000035);
	}, [canvasWidth, canvasHeight]);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const resizeObserverRef = useRef<ResizeObserver | null>(null);
	const animationDataRef = useRef({
		lastFrameID: null as number | null,
		lastTimestamp: null as number | null,
	});

	CURRENT_RGB_COLORS = inDarkMode
		? DARK_MODE_RGB_COLORS
		: LIGHT_MODE_RGB_COLORS;

	useEffect(() => {
		function updateCanvasDimensions(canvas: HTMLCanvasElement) {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			setCanvasWidth(canvas.clientWidth);
			setCanvasHeight(canvas.clientHeight);
		}

		if (resizeObserverRef.current === null) {
			resizeObserverRef.current = new ResizeObserver(() => {
				if (canvasRef.current === null) return;
				updateCanvasDimensions(canvasRef.current);
			});
		}

		if (canvasRef.current !== null) {
			resizeObserverRef.current.disconnect();
			updateCanvasDimensions(canvasRef.current);
			resizeObserverRef.current.observe(canvasRef.current);
		}

		return () => {
			if (resizeObserverRef.current !== null)
				resizeObserverRef.current.disconnect();
		};
	}, []);

	useEffect(() => {
		const animationData = animationDataRef.current;
		function animateBackground(timestamp: DOMHighResTimeStamp) {
			animationData.lastFrameID = requestAnimationFrame(animateBackground);
			const deltaTimeInMs =
				timestamp - (animationData.lastTimestamp ?? timestamp);
			const ctx =
				canvasRef.current !== null ? canvasRef.current.getContext("2d") : null;

			if (ctx !== null) {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				particles.forEach((p) => {
					if (p.isLifeOver) {
						p.reset(canvasWidth, canvasHeight);
					} else {
						p.update(deltaTimeInMs);
					}
					p.draw(ctx);
				});
			}

			animationData.lastTimestamp = timestamp;
		}
		animationData.lastFrameID = requestAnimationFrame(animateBackground);

		return () => {
			if (animationData.lastFrameID !== null)
				cancelAnimationFrame(animationData.lastFrameID);
		};
	}, [particles, canvasWidth, canvasHeight]);

	return <canvas ref={canvasRef} className={style.container} />;
});

export default ParticleBackground;
