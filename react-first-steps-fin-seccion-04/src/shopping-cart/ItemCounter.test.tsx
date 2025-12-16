import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {ItemCounter} from "./ItemCounter.tsx";

describe("ItemCounter", () => {
    test("Should render items correctly", () => {
        const texto = "Test item"
        render(<ItemCounter name={texto}/>);
        screen.debug();
        console.log("-".repeat(100));

        expect(screen.getByText(texto)).toBeDefined();
        expect(screen.getByText(texto)).not.toBeNull();
    })

    test("Should render custom quantity", () => {
        const texto = "Test item"
        const quantity = 10;
        render(<ItemCounter name={texto} quantity={quantity}/>);
        screen.debug();
        console.log("-".repeat(100));

        expect(screen.getByText(quantity)).toBeDefined();
    })
})