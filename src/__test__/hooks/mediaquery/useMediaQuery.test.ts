import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { matchMediaMock } from "@test/mocks/matchMedia.mock";
import { useMediaQuery } from "@hooks/mediaquery/useMediaQuery";
import { act } from "react";

describe("useMediaQuery unit tests", () => {
	beforeEach(() => {
		matchMediaMock.matches = true;
		matchMediaMock.addEventListener.mockImplementation(() => {});
		matchMediaMock.removeEventListener.mockImplementation(() => {});
	});

	it("initializes with media query list matches", () => {
		matchMediaMock.matches = true;
		const trueResult = renderHook(() =>
			useMediaQuery("(max-width: 650px)"),
		).result;
		expect(trueResult.current).toBe(true);

		matchMediaMock.matches = false;
		const falseResult = renderHook(() =>
			useMediaQuery("(min-width: 650px)"),
		).result;
		expect(falseResult.current).toBe(false);
	});

	it("state updates when media query list matches change", () => {
		matchMediaMock.matches = true;
		const initialResult = renderHook(() =>
			useMediaQuery("(max-width: 650px)"),
		).result;
		expect(initialResult.current).toBe(true);

		expect(vi.mocked(matchMediaMock.addEventListener)).toHaveBeenCalledOnce();
		act(() => {
			const listener: EventListener = matchMediaMock.addEventListener.mock
				.calls[0][1] as EventListener;
			matchMediaMock.matches = false;
			listener({ type: "change" } as Event);
		});
		expect(initialResult.current).toBe(false);
	});

	it("media query list event listeners all removed when unmounted", () => {
		matchMediaMock.matches = true;
		const unmount = renderHook(() =>
			useMediaQuery("(max-width: 650px)"),
		).unmount;
		unmount();

		const removedListenerArgs = vi
			.mocked(matchMediaMock.removeEventListener)
			.mock.calls.flat();
		for (const call of vi.mocked(matchMediaMock.addEventListener).mock.calls) {
			const listener = call[1];
			expect(removedListenerArgs).toContain(listener);
		}
	});
});
