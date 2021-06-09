
let isAtivo = false;

console.log(isAtivo); // false

isAtivo = true;

console.log(isAtivo); //true

isAtivo = 1;
console.log(!!isAtivo); //saida: true, simbolo ! negação, !! negando a negação mostra o valor que a  variavel tem
//caso eu coloque só !
console.log(! isAtivo); //false

//TODOS OS NUMEROS INTEIROS SAO TRUE, COM EXCESSÃO DO ZERO E TAMBÉM TODOS ESSES EXEMPLOS ABAIXO

console.log('TODOS SÃO VERDADEIROS: ');
console.log(!!3); //e todos os inteiros tirando o 0
console.log(!!-1); //numeros negativos tbm são true
console.log(!!" ");//espaços vazios ou qualquer texto 
console.log(!![]); //arrays
console.log(!!{}); //objetos literais
console.log(!!Infinity); //true

console.log("TODOS SÃO FALSOS: ");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('informaçao adicional:');
console.log( null || 'desconhecido'); // || == ou, vai mostrar o primeiro true que aparecer, neste caso, 'desconhecido'

