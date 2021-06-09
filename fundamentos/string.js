const escola = "cod3r";

console.log(escola.charAt(4)); //charAt indica onde está o caractere que eu quero, neste caso o que está na 4º posição
console.log(escola.charAt(5)); //ao inves de dar erro, ele retorna um espaço vazio

console.log(escola.charCodeAt(3)); //charCodeAt retorna um numero inteiro que esta representado na tabela unicode correspondente ao parametro que você quer

console.log(escola.indexOf('3')); //procura como se fosse um array, nesse caso a 3º posição

console.log(escola.substring(1)); //vai mostrar todos os caracteres a partir da posição que eu determinar, neste caso, od3r.

console.log(escola.substring(0, 3)); //da posição 1 até o 3 mas nao incluindo o indice 3: cod

console.log('escola '.concat(escola).concat("!"));

console.log(escola.replace(3, "e")); //substituir a letra 3 por e

//REJEX  estudar

console.log('ana, maria, joao'.split(',')); //transforma a string em array

