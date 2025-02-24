import Cone from "../Model/Cone.js"
describe("testando os resultados das funções area e volume", ()=>{
    test("testando o cálculo da geratriz", ()=>{
        const raio = 7
        const altura = 9
        const geratrizEsperada = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2))
        const cone = new Cone(raio, altura)
        expect(cone.calcularGeratriz()).toBeCloseTo(geratrizEsperada,2)
    })
    test("testando cálculo de area do cone", ()=>{
        const raio = 7
        const areaEsperada = Math.PI * raio * (raio + calcularGeratriz())
        const cone = new Cone(raio)
        expect(cone.calcularAreaTotal()).toBeCloseTo(areaEsperada,2)
    })
    test("testando cálculo do volume do cone", ()=>{
        const raio = 7
        const altura = 9
        const volumeEsperado = 1/3 * altura * Math.PI * Math.pow(raio, 2)
        const cone = new Cone(raio, altura)
        expect(cone.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})