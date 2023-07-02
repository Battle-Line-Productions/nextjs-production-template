import * as React from "react";
import { Provider as StoreProvider } from "react-redux";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { store } from "@/store";

const Providers = ({ children }: { children: React.ReactElement }) => {
	return <StoreProvider store={store}>{children}</StoreProvider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
	render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
