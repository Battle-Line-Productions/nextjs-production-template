const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	collectCoverage: true,
	coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
	resetMocks: true,
	resetModules: true,
	workerThreads: true,
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.jest.json",
		},
	},
};

module.exports = createJestConfig(customJestConfig);
