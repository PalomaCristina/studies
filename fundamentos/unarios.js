let num1 = 1;
let num2 = 2;
num1++

console.log(num1, num2);
--num1
console.log(num1, num2);

//o pré incremento ou pré decremento ++num1 || --num1 é executado antes do pós decremento e pré decremento num1++ || num1--

console.log(++num1 === num2--); //true, pois num1 foi executado primeiro por causa do pré incremento e no momento da comparação, o num2 estava como 2
console.log(num1, num2); //tanto que aqui o valor é false, pois os valores já foram alterados

