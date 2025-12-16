import {describe, expect, test} from "vitest";
import {MyAwesomeApp} from "./MyAwesomeApp.tsx";
import {render, screen} from "@testing-library/react";

describe("MyAwesomeApp", () => {
    test("Should render firstName and lastName", async () => {
        const {container} = render(<MyAwesomeApp/>);
        const h1 = container.querySelector("h1");
        const h3 = container.querySelector("h3");
        console.log("-".repeat(100))
        expect(h1?.innerHTML).toContain("Fernando");
        expect(h3?.innerHTML).toContain("Herrera");
    })

    test("Should render firstName and lastName - screen", async () => {
        render(<MyAwesomeApp/>);
        screen.debug();
        console.log("-".repeat(100))
        const h1 = screen.getByTestId("first-name-title");
        console.log(h1?.innerHTML);

        expect(h1?.innerHTML).toContain("Fernando");
    })

    test("Should match snapshot", async () => {
        const{container}=render(<MyAwesomeApp/>)
        expect(container).toMatchSnapshot();
    })
})

