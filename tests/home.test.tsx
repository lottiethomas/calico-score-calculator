import Home from "~/routes/home";
import {render} from "@testing-library/react";

it("Says hello", () => {
    const {getByText} = render(<Home/>);
    getByText("Hello World");
})