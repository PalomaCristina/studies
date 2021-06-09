/*
SE EU TIVER QUE DEFINIR UM ESPAÇO VAZIO, PREFERIMOS NULL DO QUE UNDEFINED

SE ALGO FOR UNDEFINED, DEIXAR QUE O PROPRIO SISTEMA DEFINA O QUE É UNDEFINED.
*/

let valor;
console.log(valor); //undefined - nao inicializado
//console.log(valor2); //error is not defined 

valor = null; //ausencia de valor

const produto = {}
console.log(produto); //obj vazio
console.log(produto.preco); //undefined

console.log(produto);
produto.preco = 3.50; //{preco: 3.5}

produto.preco = undefined; 
console.log(!!produto.preco); //false

console.log(produto); // {preco: undefined}

produto.preco = null; //sem preço




