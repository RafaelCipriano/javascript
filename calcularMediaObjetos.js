/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/ 

let students = [
    {
        name: 'Rafael',
        firstNote: 6,
        secondNote: 5
    },
    {
        name: 'Pedro',
        firstNote: 7,
        secondNote: 8
    },
    {
        name: 'Gabriel',
        firstNote: 6.5,
        secondNote: 6
    },
    {
        name: 'Brenda',
        firstNote: 10,
        secondNote: 6
    },
    {
        name: 'Queren',
        firstNote: 7,
        secondNote: 9.5
    }
]

let average = (note1, note2) => (note1 + note2) / 2;

for(let student of students) {
    let result = average(student.firstNote, student.secondNote);

    if(result >= 7) 
        alert(`Parábens ${student.name}! Você foi aprovado(a) no concurso.`)
    else
        alert(`Não foi dessa vez ${student.name}, tente novamente!`)
}