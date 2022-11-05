export default class Fatura {

    constructor(id, descricao, quantia, preco){
        this.id = Number(id);
        this.descricao = descricao;
        
        if(Number(quantia) > 0){
            this.quantia = Number(quantia);
        } else {
            this.quantia = 0;
        }
        this.preco = Number(preco);
    }

    get obterValorTotal() {
        return this.quantia * this.preco;
    }
}