 const [a, b, c, d] = [3,5,1,15]; 
 const soma = a + b + c + d;
console.log(soma);
 
//operadores relacionais
console.log('1' == 1); //true comparando valor e nao tipo
console.log('2' === 2); // false, valores iguals, tipos diferentes
console.log('3' != 3); // false, valores iguais
console.log('4' !== 4); //true, valores iguais e tipos diferentes
console.log(3 > 2 );  //true 
console.log(4 < 3); //false
console.log(3 <= 2); //false 
console.log(2 >= 1); //true, é maior

const d1 = new Date(0) 
const d2 = new Date(0)
console.log(d1 === d2); //false
//or
console.log(d1 == d2); //false, pq está comparando endereço de memoria, portanto dá falso em ambos
// método getTime retorna o valor numerico correspondente ao horario da data especificada de acordo com horario universal
console.log(d1.getTime() === d2.getTime());  //true pois o valor é o mesmo dos dois

console.log(undefined == null); //true
console.log(undefine === null); //false