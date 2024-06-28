let leia = require("readline-sync");

/*  Cria a matriz que será utilizada como base para definir o número de linhas
    Note que o Array está com o tamanho 3, indicando que a Matriz terá 3 linhas
*/
let matrizInteiros = Array(3);

/*  Cria o Laço de Repetição For, que será responsável por criar as 3 linhas com 3 colunas
    Note que o Array interno está com o tamanho 3, indicando que cada linha da Matriz 
    terá 3 colunas
*/
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  matrizInteiros[indiceLinha] = Array(3);
}

console.log("\nEntrada de Dados - Matriz de Inteiros\n")

/**
 * Laço For responsável por percorrer toda a Matriz e preencher os dados via teclado
 */
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++ ) {
    matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(
      `Digite um numero do elemento [${indiceLinha}][${indiceColuna}]: `
    );
  }
}

console.log("\nDados - Matriz de Inteiros\n")

console.table(matrizInteiros);
