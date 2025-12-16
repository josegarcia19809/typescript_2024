import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {FirstStepsApp} from "./FirstStepsApp.tsx";

describe("FirstStepsApp", () => {
    test("Should match snapshot", () => {
        const {container} = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    })
})