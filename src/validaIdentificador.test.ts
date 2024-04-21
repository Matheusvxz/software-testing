import { describe, expect, test } from "@jest/globals";
import { isLetter, isNumber, validaIdentificador } from "./validaIdentificador";

describe("isLetter", () => {
    test("Should return true when character is letter a", () => {
        expect(isLetter("a")).toBe(true);
    });

    test("Should return true when character is letter z", () => {
        expect(isLetter("z")).toBe(true);
    });

    test("Should return true when character is letter A", () => {
        expect(isLetter("A")).toBe(true);
    });

    test("Should return true when character is letter", () => {
        expect(isLetter("t")).toBe(true);
    });

    test("Should return true when character is letter Z", () => {
        expect(isLetter("Z")).toBe(true);
    });

    test("Should return false when character is @", () => {
        expect(isLetter("@")).toBe(false);
    });

    test("Should return false when character is \\", () => {
        expect(isLetter("\\")).toBe(false);
    });

    test("Should return false when character is {", () => {
        expect(isLetter("{")).toBe(false);
    });
});

describe("isNumber", () => {
    test("Should return true when character is number 0", () => {
        expect(isNumber("0")).toBe(true);
    });

    test("Should return true when character is number 9", () => {
        expect(isNumber("9")).toBe(true);
    });

    test("Should return false when character is /", () => {
        expect(isNumber("/")).toBe(false);
    });

    test("Should return false when character is :", () => {
        expect(isNumber(":")).toBe(false);
    });
});

describe("validaIdentificador", () => {
    test("Should return false when identificador is null", () => {
        expect(validaIdentificador(null)).toBe(false);
    });

    test("Should return true when identificador is just one letter", () => {
        expect(validaIdentificador("a")).toBe(true);
    });

    test("Should return true when identificador is two letter", () => {
        expect(validaIdentificador("bb")).toBe(true);
    });

    test("Should return false when identificador start with a number", () => {
        expect(validaIdentificador("4f")).toBe(false);
    });

    test("Should return true when identificador is lower then 6 characters lenght and all letters", () => {
        expect(validaIdentificador("abcde")).toBe(true);
    });

    test("Should return true when identificador is lower then or equal 6 characters lenght with letters and number", () => {
        expect(validaIdentificador("abcde3")).toBe(true);
    });

    test("Should return false when identificador is more then 6 characters lenght", () => {
        expect(validaIdentificador("a123456")).toBe(false);
    });

    test("Should return false when identificador has any character different of letters or numbers", () => {
        expect(validaIdentificador("d$fg ")).toBe(false);
    });
});