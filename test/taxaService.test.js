const calcularTaxa = require("../services/taxaService", () => {
    
    decribe("Testar taxaService", () => {
        test("Aplicar 5% acima de 500", () => {
            expect(calcularTaxa(600)).toBe(300)
        })

        test("não aplicar taxa até 500", () => {
            expect(calcularTaxa(300)).toBe(300)
        })
    })
})