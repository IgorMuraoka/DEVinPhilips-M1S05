import Juros from "./Juros.mjs";

const aplicacaoMes = new Juros(10000, 0.07, 24);
console.log(`Juros Simples: ${aplicacaoMes.calcularJurosSimples()}`);
console.log(`Juros Compostos: ${aplicacaoMes.calcularJurosCompostos()}`);

const aplicacaoAno = new Juros(10000, 0.15, 10);
console.log(`Juros Simples: ${aplicacaoAno.calcularJurosSimples()}`);
console.log(`Juros Compostos: ${aplicacaoAno.calcularJurosCompostos()}`);