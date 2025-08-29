import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Clean up rendered react components and such after each test
afterEach(() => {
	cleanup();
});
