const calcularDesconto = require("../service/pedidoService")

describe("Testar o pedidoService", () => {
    test("Deve aplicar 10 de desconto para valores acima de 100", () => {
        expect(calcularDesconto(200)).toBe(180)
    })

    test("Não deve aplicar desconto para valores até 100", () => {
        expect(calcularDesconto(100)).toBe(100)
    })
})