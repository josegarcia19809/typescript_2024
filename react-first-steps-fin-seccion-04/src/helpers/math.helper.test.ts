import {describe, expect, test} from "vitest";
import {add, substract} from "./math.helper.ts";

describe("Add math.helper.ts", () => {
    test("Should add three positives numbers", async () => {
        const result = add(1, 2, 2)
        expect(result).toBe(5);
    })

})


describe("Substract math.helper.ts", () => {

    test("Should substract two positive numbers", async () => {
        const result = substract(5, 3);
        expect(result).toBe(2);
    });

    test("Should substract resulting in a negative number", async () => {
        const result = substract(1, 2);
        expect(result).toBe(-1);
    });

    test("Should substract a negative number", async () => {
        const result = substract(5, -3);
        expect(result).toBe(8);
    });

    test("Should substract two negative numbers", async () => {
        const result = substract(-5, -3);
        expect(result).toBe(-2);
    });

    test("Should substract zero from a number", async () => {
        const result = substract(7, 0);
        expect(result).toBe(7);
    });

    test("Should substract a number from zero", async () => {
        const result = substract(0, 4);
        expect(result).toBe(-4);
    });

    test("Should substract same numbers", async () => {
        const result = substract(6, 6);
        expect(result).toBe(0);
    });

    test("Should substract decimal numbers", async () => {
        const result = substract(5.5, 2.2);
        expect(result).toBeCloseTo(3.3);
    });

});
