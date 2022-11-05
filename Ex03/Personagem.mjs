export default class Personagem {

    constructor(nome){
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
        if(this.percentualVida - percentualDano > 0){
            this.percentualVida -= percentualDano;
        } else{
            this.percentualVida = 0;
            return console.log("Morreu!");
        }
    }

    usouKitMedico(){
        if(this.percentualVida + 10 < 100){    
            this.percentualVida += 10;
        } else{
            this.percentualVida = 100;
            return console.log("Vida cheia!");
        }
    }
}

