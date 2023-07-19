/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let patients = [
    {
        name: 'Rafael',
        age: 19,
        weight: 78.5,
        height: 186,
    },
    {
        name: 'Gabriela',
        age: 23,
        weight: 67.3,
        height: 174,
    },
    {
        name: 'Bruna',
        age: 19,
        weight: 65.4,
        height: 172,
    },
    {
        name:'Gabriel',
        age: 16,
        weight: 65,
        height: 170,
    },
    {
        name: 'André',
        age: 18,
        weight: 73,
        height: 177,
    },
]

for(let patient of patients) {
    let weight = patient.weight;
    let height = patient.height;
    console.log(`O paciente ${patient.name} tem um IMC de ${calculateBMI(weight, height)}`);
}

function calculateBMI(weight, height) {
    let result = weight / ((height / 100) ** 2);
    return result.toFixed(2);
}