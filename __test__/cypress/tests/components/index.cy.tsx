import React from "react";
import Home from "../../../../src/pages/index.tsx";

describe("<Home />", () => {
	it("renders", () => {
		cy.mount(<Home />);
	});
});
