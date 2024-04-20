import { describe, expect, test } from "@jest/globals";
import { calculaTaxaDesconto } from "./calculaTaxaDesconto";

describe("calculaTaxaDesconto", () => {
    test("Should return 0 when tipoClient is empty and lower then 200", () => {
        expect(calculaTaxaDesconto("", 100)).toBe(0);
        expect(calculaTaxaDesconto("", 199)).toBe(0);
    });

    test("Should return 5 when tipoClient is empty and greater then or equal 200 and lower then 400", () => {
        expect(calculaTaxaDesconto("", 200)).toBe(5);
        expect(calculaTaxaDesconto("", 250)).toBe(5);
        expect(calculaTaxaDesconto("", 399)).toBe(5);
    });

    test("Should return 10 when tipoClient is empty and greater then or equal 400 and lower then 500", () => {
        expect(calculaTaxaDesconto("", 400)).toBe(10);
        expect(calculaTaxaDesconto("", 401)).toBe(10);
        expect(calculaTaxaDesconto("", 499)).toBe(10);
    });

    test("Should return 15 when tipoClient is empty and greater then or equal 500", () => {
        expect(calculaTaxaDesconto("", 500)).toBe(15);
        expect(calculaTaxaDesconto("", 501)).toBe(15);
    });

    test("Should return 5 when tipoClient is bronze and valorCompra is lower than 400", () => {
        expect(calculaTaxaDesconto("bronze", 199)).toBe(5);
        expect(calculaTaxaDesconto("bronze", 200)).toBe(5);
        expect(calculaTaxaDesconto("bronze", 201)).toBe(5);
        expect(calculaTaxaDesconto("bronze", 399)).toBe(5);
    });

    test("Should return 10 when tipoClient is bronze and valorCompra is greater than or equal 400 and lower then 500", () => {
        expect(calculaTaxaDesconto("bronze", 450)).toBe(10);        
    });

    test("Should return 15 when tipoClient is bronze and valorCompra is greater than or equal 500", () => {
        expect(calculaTaxaDesconto("bronze", 559)).toBe(15);        
    });

    test("Should return 10 when tipoClient is prata and valorCompra is lower than 500", () => {
        expect(calculaTaxaDesconto("prata", 100)).toBe(10);
        expect(calculaTaxaDesconto("prata", 250)).toBe(10);
        expect(calculaTaxaDesconto("prata", 450)).toBe(10);
    });

    test("Should return 15 when tipoClient is prata and valorCompra is greater than or equal 500", () => {
        // expect(calculaTaxaDesconto("prata", 500)).toBe(15);
        expect(calculaTaxaDesconto("prata", 559)).toBe(15);
    });

    test("Should return 15 when tipoClient is ouro", () => {
        expect(calculaTaxaDesconto("ouro", 100)).toBe(15);
        expect(calculaTaxaDesconto("ouro", 250)).toBe(15);
        expect(calculaTaxaDesconto("ouro", 450)).toBe(15);
        expect(calculaTaxaDesconto("ouro", 550)).toBe(15);
    });
});