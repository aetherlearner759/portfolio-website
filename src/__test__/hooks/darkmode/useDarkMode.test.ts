import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import useDarkMode from "@hooks/darkmode/useDarkMode";
import {
	syncThemeToDOM,
	unsyncThemeFromDOM,
} from "@hooks/darkmode/useDarkMode";
import { act } from "react";
import type { SchemeChangedListener } from "@hooks/darkmode/ColorSchemeSource";

// work-around for @typescript-eslint/unbound-method
const [getColorScheme, setColorScheme, addListener, removeListener] =
	vi.hoisted(() => {
		return [vi.fn(), vi.fn(), vi.fn(), vi.fn()];
	});

vi.mock(import("@hooks/darkmode/ColorSchemeSource"), () => {
	return {
		ColorSchemeSource: {
			getColorScheme: getColorScheme,
			setColorScheme: setColorScheme,
			addListener: addListener,
			removeListener: removeListener,
		},
	};
});

const THEME_DATA_ATTR = "theme";

describe("useDarkMode unit tests", () => {
	afterEach(() => {
		unsyncThemeFromDOM();
	});

	it("defaults to color scheme source", () => {
		vi.mocked(getColorScheme).mockReturnValue("dark");
		const [inDarkMode] = renderHook(() => useDarkMode()).result.current;
		expect(inDarkMode).toBe(true);

		vi.mocked(getColorScheme).mockReturnValue("light");
		const [inNotDarkMode] = renderHook(() => useDarkMode()).result.current;
		expect(inNotDarkMode).toBe(false);
	});

	it("state updater updates state value", () => {
		const { result } = renderHook(() => useDarkMode());
		const [oldInDarKMode, setInDarkMode] = result.current;
		act(() => {
			setInDarkMode((x) => !x);
		});

		const [newInDarkMode] = result.current;
		expect(newInDarkMode).toBe(!oldInDarKMode);
	});

	it("state update from one hook updates two other hooks", () => {
		vi.mocked(getColorScheme).mockReturnValue("light");
		const updaterHook = renderHook(() => useDarkMode()).result;
		const otherHook1 = renderHook(() => useDarkMode()).result;
		const otherHook2 = renderHook(() => useDarkMode()).result;

		expect(updaterHook.current[0]).toBe(false);

		const [oldInDarkMode, setInDarkMode] = updaterHook.current;
		act(() => {
			setInDarkMode((x) => !x);
		});

		expect(updaterHook.current[0]).toBe(true);
		expect(vi.mocked(addListener)).toHaveBeenCalledTimes(3);
		expect(vi.mocked(setColorScheme)).toHaveBeenCalledWith("dark");

		act(() => {
			for (const call of vi.mocked(addListener).mock.calls) {
				const listener = call[0] as SchemeChangedListener;
				listener("light", "dark");
			}
		});

		expect(updaterHook.current[0]).toBe(!oldInDarkMode);
		expect(updaterHook.current[0]).toEqual(otherHook1.current[0]);
		expect(updaterHook.current[0]).toEqual(otherHook2.current[0]);
	});

	it("removes all event listeners from ColorSchemeSource on unmount", () => {
		const unmount = renderHook(() => useDarkMode()).unmount;
		unmount();

		const removedListeners = vi.mocked(removeListener).mock.calls.flat();
		for (const call of vi.mocked(addListener).mock.calls) {
			const listener = call[0] as SchemeChangedListener;
			expect(removedListeners).toContain(listener);
		}
	});

	it("document theme initializes to color scheme source", () => {
		vi.mocked(getColorScheme).mockReturnValue("dark");
		syncThemeToDOM();
		expect(document.documentElement.dataset[THEME_DATA_ATTR]).toBe("dark");
		unsyncThemeFromDOM();

		vi.mocked(getColorScheme).mockReturnValue("light");
		syncThemeToDOM();
		expect(document.documentElement.dataset[THEME_DATA_ATTR]).toBe("light");
		unsyncThemeFromDOM();
	});

	it("state updater toggles document's theme", () => {
		vi.mocked(getColorScheme).mockReturnValue("light");
		syncThemeToDOM();
		expect(document.documentElement.dataset[THEME_DATA_ATTR]).toBe("light");
		expect(vi.mocked(addListener)).toHaveBeenCalledOnce();

		const { result } = renderHook(() => useDarkMode());
		const setInDarkMode = result.current[1];
		act(() => {
			setInDarkMode((x) => !x);
		});

		act(() => {
			for (const call of vi.mocked(addListener).mock.calls) {
				const listener = call[0] as SchemeChangedListener;
				listener("light", "dark");
			}
		});

		expect(document.documentElement.dataset[THEME_DATA_ATTR]).toBe("dark");

		act(() => {
			setInDarkMode((x) => !x);
		});

		act(() => {
			for (const call of vi.mocked(addListener).mock.calls) {
				const listener = call[0] as SchemeChangedListener;
				listener("dark", "light");
			}
		});
		expect(document.documentElement.dataset[THEME_DATA_ATTR]).toBe("light");
	});
});
