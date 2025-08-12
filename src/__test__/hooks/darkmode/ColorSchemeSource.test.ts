import { describe, it, expect, vi, afterEach } from "vitest";
import { matchMediaMock } from "@test/mocks/matchMedia.mock";

describe("ColorSchemeSource unit tests", () => {
	afterEach(() => {
		vi.resetModules();
		localStorage.clear();
	});

	function loadColorSchemeModule() {
		return import("../../../hooks/darkmode/ColorSchemeSource");
	}

	it("Initializes with dark theme when system preference is dark", async () => {
		matchMediaMock.matches = true;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;

		expect(vi.mocked(window.matchMedia)).toHaveBeenCalledWith(
			"(prefers-color-scheme: dark)",
		);
		expect(ColorSchemeSource.getColorScheme()).toBe("dark");
	});

	it("Initializes with light theme when system preference is not dark", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;

		expect(vi.mocked(window.matchMedia)).toHaveBeenCalledWith(
			"(prefers-color-scheme: dark)",
		);
		expect(ColorSchemeSource.getColorScheme()).toBe("light");
	});

	it("Initialization saves color theme into local storage", async () => {
		matchMediaMock.matches = false;
		expect(localStorage.length).toBe(0);
		await loadColorSchemeModule();

		expect(localStorage.length).toBe(1);
		expect(localStorage.getItem(localStorage.key(0) as string)).toBe("light");
	});

	it("setColorScheme sets new color scheme", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");

		ColorSchemeSource.setColorScheme("dark");

		expect(ColorSchemeSource.getColorScheme()).toBe("dark");
	});

	it("setColorScheme persists new color scheme into localStorage", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");
		expect(localStorage.length).toBe(1);
		expect(localStorage.getItem(localStorage.key(0) as string)).toBe("light");

		ColorSchemeSource.setColorScheme("dark");

		expect(ColorSchemeSource.getColorScheme()).toBe("dark");
		expect(localStorage.length).toBe(1);
		expect(localStorage.getItem(localStorage.key(0) as string)).toBe("dark");
	});

	it("setColorScheme calls listener if color scheme changed", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");

		const listener = vi.fn();
		ColorSchemeSource.addListener(listener);
		expect(vi.mocked(listener)).not.toBeCalled();

		ColorSchemeSource.setColorScheme("dark");
		expect(vi.mocked(listener)).toBeCalledWith("light", "dark");
	});

	it("setColorScheme does not call listener if color scheme did not change", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");

		const listener = vi.fn();
		ColorSchemeSource.addListener(listener);
		expect(vi.mocked(listener)).not.toBeCalled();

		ColorSchemeSource.setColorScheme("light");
		expect(vi.mocked(listener)).not.toBeCalled();
	});

	it("setColorScheme calls all listeners", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");

		const listeners = [vi.fn(), vi.fn(), vi.fn()];
		for (const listener of listeners) {
			ColorSchemeSource.addListener(listener);
		}

		ColorSchemeSource.setColorScheme("dark");
		for (const listener of listeners) {
			expect(vi.mocked(listener)).toBeCalled();
		}
	});

	it("removeListener removes matching listener from list of listeners", async () => {
		matchMediaMock.matches = false;
		const ColorSchemeSource = (await loadColorSchemeModule()).ColorSchemeSource;
		expect(ColorSchemeSource.getColorScheme()).toBe("light");

		const listeners = [vi.fn(), vi.fn(), vi.fn()];
		for (const listener of listeners) {
			ColorSchemeSource.addListener(listener);
		}

		ColorSchemeSource.setColorScheme("dark");
		for (const listener of listeners) {
			expect(vi.mocked(listener)).toBeCalled();
		}

		for (const listener of listeners) {
			vi.mocked(listener).mockClear();
		}
		ColorSchemeSource.removeListener(listeners[0]);
		ColorSchemeSource.setColorScheme("light");
		expect(vi.mocked(listeners[0])).not.toBeCalled();
		expect(vi.mocked(listeners[1])).toBeCalled();
		expect(vi.mocked(listeners[2])).toBeCalled();
	});
});
