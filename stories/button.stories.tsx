import type { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "../src/components/buttonComponent";

const meta: Meta<typeof ButtonComponent> = {
	title: "Components/ButtonComponent",
	component: ButtonComponent,
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
	args: {
		id: "button1",
		text: "Default Button",
		color: "blue",
		tooltip: "This is a default button",
	},
};

export const Secondary: Story = {
	args: {
		id: "button2",
		text: "Red Button",
		color: "red",
		tooltip: "This is a red button",
	},
};

export const Tertiary: Story = {
	args: {
		id: "button3",
		text: "Green Button",
		color: "green",
		tooltip: "This is a green button",
	},
};
