/*
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/ 

const sum = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => x / y;
const restOfTheDivision = (x, y) => x % y;

function isItEvenOrIsItOdd(x, y) {
    if(x % y == 0)
        alert('A soma dos números é par.')
    else
        alert('A soma dos números é ímpar.')
}

function checkIfNumbersAreEqual(x, y) {
    if(x === y)
        alert('Os números inseridos são iguais.')
    else
        alert('Os números inseridos são diferentes.')
}

function main() {
    let num1 = prompt('Digite o primeiro número:');
    let num2 = prompt('Digite o segundo número:');

    num1 = Number(num1);
    num2 = Number(num2);

    alert(`A soma dos números é ${sum(num1, num2)}`)
    alert(`A subtração dos números é ${subtraction(num1, num2)}`)
    alert(`A multiplicação dos números é ${multiplication(num1, num2)}`)
    alert(`A divisão dos números é ${division(num1, num2)}`)
    alert(`O resto da divisão é ${restOfTheDivision(num1, num2)}`)
    isItEvenOrIsItOdd(num1, num2)
    checkIfNumbersAreEqual(num1, num2)
}

main()