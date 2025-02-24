import Cilindro from "./Model/Cilindro.js"
import Cone from "./Model/Cone.js"

let raio = Number(document.getElementById("raio").value)
let altura = Number(document.getElementById("altura").value)
let res = document.getElementById("res")

const cilindro = new Cilindro(raio, altura)
const cone = new Cone(raio, altura)

const areaTotalCilindro = cilindro.calcularArea()
const volumeTotalCilindro = cilindro.calcularVolume()
const areaTotalCone = cone.calcularAreaTotal()
const volumeTotalCone = cone.calcularVolume()

res.innerHTML = ""