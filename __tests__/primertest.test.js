import { test, expect, describe } from "vitest"

describe("Primer grupo de tests", () => {
    test("Suma de 2 + 3 debe ser 5", () => {
        // El comportamiento esperado es que 2 + 3 sea 5
        expect(2 + 3).toBe(5)
    })
    test("Suma de 2 + 5 NO debe ser 5", () => {
        // El comportamiento esperado es que 2 + 5 NO sea 5
        expect(2 + 5).not.toBe(5)
    })
})