//agrupar multiplos valores em forma linear
let valores = [7.6, 8.7, 9.8, 6.5];
console.log(valores[0], valores[3]);

console.log(valores[4]); //undefined
valores[4] = 3.4;
console.log(valores[4]); // 3.4
console.log(valores.length); //vai mostrar a quantidade de elementos que tem no array

valores.push({id: 3}, false, null, 'teste' ); //posso colocar varios tipos de dado dentro do array em javascript o push serve para adcionar mais elementos
//o ideal é ter um array para cada tipo de dado
console.log(valores);

console.log(valores.pop()); //pop tira o ultimo valor do elemento do array
delete valores[1]; //tbm tira o elemento que vc escolher
console.log(valores);

console.log(typeof valores);