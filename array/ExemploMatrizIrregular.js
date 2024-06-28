let leia = require("readline-sync")

// Variável para guardar a soma das linhas
let soma = 0;

/*  Cria o Array que será utilizado como base para definir o número de linhas da Matriz.
    Note que o Array está definido com o tamanho 2, indicando que a Matriz terá 2 linhas.
*/
let matrizInteiros = Array(2);

/*  Cria o Laço de Repetição For, que será responsável por adicionar as 3 colunas 
	em cada uma das linhas da Matriz.
    Note que o Array interno está com o tamanho 3, indicando que cada linha da Matriz 
    terá 3 colunas.
*/
for (let indice = 0; indice < matrizInteiros.length; indice++) {
  matrizInteiros[indice] = Array(3);
}

console.log("\nEntrada de Dados - Matriz de Inteiros\n")

/**
 * Laço For responsável por percorrer toda a Matriz e preencher os dados via teclado
 */
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {

    /*  Observe que para pegar o tamanho da linha, precisamos indicar o indice da linha
        da Matriz que estamos lendo. 
        Note que utilizamos a variável indiceLinha para identificar o indice de 
		cada linha da matriz
    */
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++) {

        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite um numero do elemento [${indiceLinha}][${indiceColuna}]: `);

    }
}

console.log("\nDados - Matriz de Inteiros\n")

console.table(matrizInteiros);

console.log("\nSoma de todos os Elementos de cada Linha - Matriz de Inteiros\n")

/**
 * Laço For responsável por percorrer toda a Matriz e calcular a soma
 */
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {

    /**
     * No Laço For Interno faremos a soma de todos os elementod de cada linha
     */
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++) {

        soma += matrizInteiros[indiceLinha][indiceColuna] 

    }

    /**
     * No Laço For Externo, exibiremos o resultado da soma e reiniciaremos a variável 
     * soma, para fazer a soma dos elementos da próxima linha
     */
    console.log(`\nSoma dos Elementos da linha ${indiceLinha}: ${soma}`)
    soma = 0

}