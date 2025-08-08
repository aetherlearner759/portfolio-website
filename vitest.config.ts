/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// https://vite.dev/config/
export default defineConfig((configEnv) =>
	mergeConfig(
		viteConfig(configEnv),
		defineConfig({
			test: {
				projects: [
					{
						extends: true,
						test: {
							name: "Node unit tests",
							globals: true,
							environment: "node",
							include: ["**/*.test.ts"],
						},
					},
					{
						extends: true,
						test: {
							name: "jsdom unit tests",
							globals: true,
							environment: "jsdom",
							include: ["**/*.test.tsx"],
							setupFiles: ["./src/__test__/setUp.tsx"],
						},
					},
				],
			},
		}),
	),
);
