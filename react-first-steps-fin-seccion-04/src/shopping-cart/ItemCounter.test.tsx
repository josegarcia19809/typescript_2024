import {describe, expect, test} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
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

    test("Should increase count when +1 button is pressed", () => {

        render(<ItemCounter name={"Test item"} quantity={1}/>);

        const [buttonAdd] = screen.getAllByRole("button");


        screen.debug();
        console.log("-".repeat(100));

        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();

    })

    test("Should decrease count when -1 button is pressed", () => {

        render(<ItemCounter name={"Test item"} quantity={5}/>);

        const [, buttonSubstract] = screen.getAllByRole("button");


        screen.debug();
        console.log("-".repeat(100));

        fireEvent.click(buttonSubstract);
        expect(screen.getByText('4')).toBeDefined();

    })

    test("Should not decrease count when -1 button is pressed and quatity = 1", () => {

        render(<ItemCounter name={"Test item"} quantity={1}/>);

        const [, buttonSubstract] = screen.getAllByRole("button");


        screen.debug();
        console.log("-".repeat(100));

        fireEvent.click(buttonSubstract);
        expect(screen.getByText('1')).toBeDefined();

    })


})