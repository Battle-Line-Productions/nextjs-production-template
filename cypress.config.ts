import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
	env: combinedEnv,
	component: {
		specPattern: "__test__/cypress/components/**/*.cy.{js,jsx,ts,tsx}",
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: "__test__/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
		screenshotOnRunFailure: false,
		retries: {
			runMode: 3,
		},
	},
});
