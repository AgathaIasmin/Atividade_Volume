import Cilindro from "../Model/Cilindro.js"
describe("testando as funções do código para o cilindro", ()=>{
    test("testando cálculo de área",()=>{
        const raio = 5
        const altura = 8
        const areaTotalEsperada = (2 * Math.PI * raio * altura) + (2 * Math.PI * Math.pow(raio, 2))
        const cilindro = new Cilindro(raio, altura)
        expect(cilindro.calcularArea()).toBeCloseTo(areaTotalEsperada,2)
    })
    test("testando cálculo volume", ()=>{
        const raio = 3
        const volumeTotalEsperado = Math.PI * Math.pow(raio, 2) * altura
        const cilindro = new Cilindro(raio, altura)
        expect(cilindro.calcularVolume()).toBeCloseTo(volumeTotalEsperado,2)
    })
})