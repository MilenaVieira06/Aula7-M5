let variavel = '';
let array = [];
let objeto = {};

class Aluno {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

let aluno1 = new Aluno('Milena', 'Vieira');

console.log(aluno1.nome + ' ' + aluno1.sobrenome);
