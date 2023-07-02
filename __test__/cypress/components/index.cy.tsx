import React from "react";
import Home from "../../../src/pages/index";

describe("<Home />", () => {
	it("renders", () => {
		cy.mount(<Home />);
	});
});
