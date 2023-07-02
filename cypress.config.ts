import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
	env: combinedEnv,
	downloadsFolder: "__test__/cypress/downloads",
	fixturesFolder: "__test__/cypress/fixtures",
	screenshotsFolder: "__test__/cypress/screenshots",
	videosFolder: "__test__/cypress/videos",
	component: {
		specPattern: "__test__/cypress/tests/components/**/*.cy.{js,jsx,ts,tsx}",
		supportFile: "__test__/cypress/support/component.ts",
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		supportFile: "__test__/cypress/support/e2e.ts",
		specPattern: "__test__/cypress/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
		screenshotOnRunFailure: false,
		retries: {
			runMode: 3,
		},
	},
});
