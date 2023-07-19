/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let name = prompt("Qual o seu nome?");
let noteOne = prompt("Digite a primeira nota.");
let noteTwo = prompt("Digite a segunda nota.");
let noteThree = prompt("Digite a terceira nota.");
let average = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3;

average = average.toFixed(2)

if(average >= 7) {
    alert("A média de " + name + " foi " + average + ". Aprovado(a), parábens.");
} else if(average >=5 && average <=6) {
    alert("A média de " + name + " foi " + average + ". Recuperação, dê o seu melhor.");
} else {
    alert("A média de " + name + " foi " + average + ". Reprovado, dedique-se mais na próxima vez, não desista!");
}