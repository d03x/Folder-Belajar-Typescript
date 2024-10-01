import { test, expect, describe } from "bun:test"
import hello from "./hello";

describe("Typescript Basic Hello World", () => {
    test("Print Hello world", function () {
        expect(typeof hello() === "string").toBeTrue()
    });
})