class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }


    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}

function validaAutenticacao(ev){
    ev.preventDefault();

    const email = ev.target.email.value;
    const senha = ev.target.senha.value;

    if(usu.autenticar(email, senha)){
        return alert("Acesso realizado com sucesso!")
    } else{
        return alert("Credenciais inválidas. Tente novamente!")
    }
}

const usu = new Usuario('Igor', 'Igor@gmail.com', '123');

const form = document.getElementById('form');
form.addEventListener('submit', validaAutenticacao)