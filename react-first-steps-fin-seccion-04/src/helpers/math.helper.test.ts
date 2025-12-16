import {expect, test} from "vitest";
import {add} from "./math.helper.ts";

test("Should add three positives numbers", async () => {
    const result = add(1, 2, 2)
    expect(result).toBe(6);
})