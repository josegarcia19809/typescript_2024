import {describe, test} from "vitest";
import {MyAwesomeApp} from "./MyAwesomeApp.tsx";
import {render, screen} from "@testing-library/react";

describe("MyAwesomeApp", () => {
    test("Should render firstName and lastName", async () => {
        render(<MyAwesomeApp />);
        screen.debug()
    })
})