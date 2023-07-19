/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

const menu = `
    Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
`;
let list = [];
let isRunning = false;
while(!isRunning) {
    let option = prompt(`${menu}`);
    switch(option) {
        case '1':
            list.push(prompt("Digite o item para cadastro."));

            let registerMore = true; 
            while(registerMore) {
                let wantToContinue = prompt("Deseja cadastrar mais algum item? S(Sim) / N(Não)");

                if(wantToContinue == 's' || wantToContinue == 'S') {
                    list.push(prompt("Digite o item para cadastros."));
                } else {
                    registerMore = false;
                }
            }
        break;

        case '2':
            if(list.length == 0) {
                alert("Não existem itens cadastrados");
            } else {
                alert(`
                    Estes são os itens cadastrados:

                    ${list}
                `);
            }
        break;

        case '3':
            isRunning = true;
            alert("Programa encerrado com sucesso!");
        break;
    }
}