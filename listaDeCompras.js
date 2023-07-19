/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = [];

for(let i = 1; i <= 5; i++) {
    items.push(prompt("Digite o " + i + "° item da lista.") + " ");

    if(i === 5) {
        alert("Esta é sua lista de compras para o Supermercado: \n\n" + items);
    }
}