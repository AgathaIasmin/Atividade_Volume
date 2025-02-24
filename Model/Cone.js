export default class Cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }
    calcularGeratriz(){
        return Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2))
    }
    calcularAreaTotal(){
        return Math.PI * raio * (raio + calcularGeratriz())
    }
    calcularVolume(){
        return 1/3 * altura * Math.PI * Math.pow(raio, 2)
    }
}