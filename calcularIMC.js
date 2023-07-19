/*
  Crie um programa capaz de calcular o índice de massa corporal(IMC) de uma pessoa e, diga qual a situação atual do peso dessa pessoa.
*/

let nome = prompt('Olá, você está prestes a iniciar o teste de índice de massa corporea (IMC), mas primeiro diga-nos qual é o seu nome completo?');

let peso = prompt(nome + ' qual é o seu peso? - Utilize ponto(.) para decimal - Exemplo: 77.32');

let altura = prompt('Certo, ' + nome + ' agora preciso saber a sua altura. Utilize como o peso ponto(.) para decimais. - Exemplo: 1.75 -');

let resultado;

function calcularIMC() {
  resultado = Number(peso) / (Number(altura) * Number(altura))
};

calcularIMC();

function imprimirResultadoIMC() {
  if(resultado <= 18.5) {
    alert(nome + ' seu IMC indica magreza.')
  }
  else if(resultado >= 18.5 && resultado <= 24.9) {
    alert(nome + ' seu IMC indica peso normal.')
  }
  else if(resultado >= 25 && resultado <= 29.9) {
    alert(nome + ' seu IMC indica sobrepeso.')
  }
  else if(resultado >= 30 && resultado <= 39.9) {
    alert(nome + ' seu IMC indica obesidade.')
  }
  else {
    alert(nome + 'seu IMC indica obesidade grave.')
  }
};

imprimirResultadoIMC();