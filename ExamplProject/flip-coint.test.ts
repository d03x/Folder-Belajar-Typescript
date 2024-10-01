import { test, expect } from "bun:test";
import flipCoint from "./flip-coint";

test("Test Flip Coint Example Project", () => {
    const fliped = flipCoint();
    expect((fliped == "A" || fliped == 'B')).toBeTrue()
})