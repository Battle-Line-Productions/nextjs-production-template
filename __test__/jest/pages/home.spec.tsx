import "jest";
import HomePage from "@/pages";
import { render } from "@/utils/test-utils";

describe("Home Page", () => {
	it("tests if Home Page is render ", () => {
		const { getByText } = render(<HomePage />);
		expect(getByText("Next React with Bootstrap")).toBeTruthy();
	});
});
