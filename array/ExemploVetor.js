let leia = require("readline-sync")

// Vetor de strings
let vetorStrings = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi",
    "Caramelo",
    "Pitbull"
  ];

  // Vetor vazio com 5 posições
  let vetorNumeros = Array(5)

  // Vetor de Numeros
  let vetorInteiros = [ 5, 2, 6, 7, 9, 3, 99, 22]

  console.log("\nDados - Vetor de Strings\n")

  // Laço For, que percorre todo Vetor vetorStringss e exibe todos os elementos
  for (let contador = 0; contador < vetorStrings.length; contador ++){
    console.log(`Posição[${contador}] = ${vetorStrings[contador]}`)
  }

  console.log("\nEntrada de Dados - Vetor de Numeros\n")

  // Laço For, que percorre todo o Vetor vetorNumeros e insere elementos
  for (let contador = 0; contador < vetorNumeros.length; contador ++){
    vetorNumeros[contador] = leia.questionInt("Digite um numero: ")
  }

  console.log("\nDados - Vetor de Numeros\n")
  // Função para exibir os dados em forma de tabela
  console.table(vetorNumeros)


  console.log("\nDados em Ordem Crescente - Vetor de Strings\n")
  // Ordenação de strings
  console.table(vetorStrings.sort())

  console.log("\nDados em Ordem Crescente - Vetor de Inteiros\n")

  console.table(vetorInteiros.sort(compareAsc))

  console.log("\nDados em Ordem Decrescente - Vetor de Inteiros\n")

/** 
 * Ordenação de números - Note que foi passado como parâmetro do método
 * sort uma função de comparação, para ajustar a ordenação numérica
 * O método reverse transforma a Ordenação Crescente em Decrescente
 */  
  console.table(vetorInteiros.sort(compareAsc).reverse())

  // Função de Comparação - Ordenação de Números Crescente
  function compareAsc(a, b) {
    return a - b;
  } 