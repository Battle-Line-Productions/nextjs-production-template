import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		{
			name: "@storybook/addon-styling",
			options: {},
		},
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	staticDirs: ["../public"],
	webpackFinal: async (config) => {
		config.resolve?.modules?.push(path.resolve(__dirname, "../src"));
		return config;
	},
};

export default config;
