import { vi } from "vitest";
import {
	throwNotImplementedError,
	throwUsingDeprecatedError,
} from "@test/utility";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn((query: string) => ({
		get matches(): boolean {
			return matchMediaMock.matches;
		},
		media: query,
		onchange: null,
		addListener: vi.fn(throwUsingDeprecatedError),
		removeListener: vi.fn(throwUsingDeprecatedError),
		addEventListener: matchMediaMock.addEventListener,
		removeEventListener: matchMediaMock.removeEventListener,
		dispatchEvent: vi.fn(throwNotImplementedError),
	})),
});

export const matchMediaMock = {
	matches: false,
	addEventListener: vi.fn<typeof addEventListener>(throwNotImplementedError),
	removeEventListener: vi.fn<typeof removeEventListener>(
		throwNotImplementedError,
	),
};
