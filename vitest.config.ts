/// <reference types="vitest" />
import { defineConfig, configDefaults, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig((configEnv) =>
	mergeConfig(
		viteConfig(configEnv),
		defineConfig({
			resolve: {
				alias: {
					"@test": path.resolve(__dirname, "./src/__test__"),
					"@test/mocks": path.resolve(__dirname, "./src/__test__/mocks"),
				},
			},
			test: {
				projects: [
					{
						extends: true,
						test: {
							name: "Client tests",
							globals: true,
							environment: "jsdom",
							include: ["**/*.test.ts"],
							exclude: [...configDefaults.exclude, "**/use*.test.ts"],
							setupFiles: ["./src/__test__/mockSetUp.ts"],
						},
					},
					{
						extends: true,
						test: {
							name: "React tests",
							globals: true,
							environment: "jsdom",
							include: ["**/*.test.tsx", "**/use*.test.ts"],
							setupFiles: [
								"./src/__test__/mockSetUp.ts",
								"./src/__test__/reactSetUp.ts",
							],
							sequence: {
								// to enforce react clean up first then mock clean up.
								hooks: "stack",
								setupFiles: "list",
							},
						},
					},
				],
			},
		}),
	),
);
