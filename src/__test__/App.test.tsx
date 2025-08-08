import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "@/App";

describe("App", () => {
	it("App debugs", () => {
		const app = render(<App></App>);
		app.debug();
	});
});
