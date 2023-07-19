/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

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
    console.log(patient.name)
}