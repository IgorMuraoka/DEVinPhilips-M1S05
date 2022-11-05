export class CalculadoraDeArea {

    constructor(tipo, base, altura){
        this.tipo = tipo;
        this.base = Number(base);
        this.altura = Number(altura);
    }

    calcular(){
        if(this.tipo == 'triangulo'){
            return (this.base * this.altura) / 2;
        } else if (this.tipo == 'quadrado' || this.tipo == 'retangulo'){
            return this.base * this.altura;
        } else{
            return console.log("Polígono incorreto!");
        }
    }
}