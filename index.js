/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people) {
  // TODO
  // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
  // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
  // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
  // nomes dos usuários.
  let invertPeople = [];
  for (let i = people.length - 1; i >= 0; i--) {
    invertPeople.push(people[i]);
  }
  return invertPeople;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {
  // TODO
  // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
  // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
  // ou superior a 7.
  let n1 = grades[0];
  let n2 = grades[1];
  let n3 = grades[2];
  let media = (n1 + n2 + n3) / 3;

  return media;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {
  // TODO
  // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
  // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
  // ou superior a 7.
  if (mean >= 7) {
    return 'aprovado';
  } else {
    return 'reprovado';
  }
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate) {
  // TODO
  // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
  // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
  // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
  // Nesse caso, o separador é a barra (/) da data.
  let data = strDate.split('/');
  let mes = data[1];

  switch (mes) {
    case '01':
      mes = 'janeiro';
      break;
    case '02':
      mes = 'fevereiro';
      break;
    case '02':
      mes = 'março';
      break;
    case '04':
      mes = abril;
      break;
    case '05':
      mes = 'maio';
      break;
    case '06':
      mes = 'junho';
      break;
    case '07':
      mes = 'julho';
      break;
    case '08':
      mes = 'agosto';
      break;
    case '09':
      mes = 'setembro';
      break;
    case '10':
      mes = 'outubro';
      break;
    case '11':
      mes = 'novembro';
      break;
    case '12':
      mes = 'dezembro';
      break;
    default:
  }
  if (strDate === '') {
    return '';
  } else if (strDate !== data[0] + '/' + data[1] + '/' + data[2]) {
    return '';
  } else {
    return data[0] + ' de ' + mes + ' de ' + data[2];
  }
}

// Trecho utilizado pelos testes
exports._test = {
  invert: invert,
  mean: mean,
  isApproved: isApproved,
  wide: wide,
};
