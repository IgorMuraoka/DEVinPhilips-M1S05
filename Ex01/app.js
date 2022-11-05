class Funcionario {

  constructor(cpf, nomeCompleto, salario){
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual){
    this.salario = this.salario * (1 + (percentual/100));
  }
}

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario);

ada.promover(50);

console.log(ada.salario);