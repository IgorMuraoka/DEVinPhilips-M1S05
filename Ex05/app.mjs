import { CalculadoraDeArea } from "./CalculadoraDeArea.mjs";


const triangulo = new CalculadoraDeArea("triangulo", 6, 8);
const areaTriangulo = triangulo.calcular();
console.log(areaTriangulo);

const quadrado = new CalculadoraDeArea("quadrado", 4, 4);
const areaQuadrado = quadrado.calcular();
console.log(areaQuadrado);

const retangulo = new CalculadoraDeArea("retangulo", 4, 6);
const areaRetangulo = retangulo.calcular();
console.log(areaRetangulo);