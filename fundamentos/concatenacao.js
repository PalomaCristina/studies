const nome = 'Paloma';
const concatenacao = 'Olá '+ nome + '!';
const concat2 = `Olá ${nome}`; // ` template string `

console.log(concatenacao, concat2);

console.log(`1 + 1 = ${1 + 1}`);

// arrow function

const up = texto => texto.toUpperCase(); //transforma as letras em MAIUSCULO

console.log(`ei... ${up('cuidado')}!`);

