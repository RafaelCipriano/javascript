/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

alert("Advinhe o número que estou pensando? Está entre 0 e 10");

let number = Math.ceil(Math.random() * 10);
let counter = 0;
let isRight = false;

while(!isRight) {
    let yourAnswer = prompt("Qual é o número que estou pensando?");

    if(yourAnswer > number) {
        alert("O valor é muito alto.");
    } else if(yourAnswer < number) {
        alert("O valor é muito baixo.");
    } else {
        isRight = true;
        alert("Parábens! O número é " + number + ", você acertou!");
        alert("Você acertou em " + counter + " tentativa(s).");
    }

    counter++;
}

