//geralmente o codigo é lido em forma de cascata, de cima pra baixo, mas em js é diferente
// var a;
console.log("a = ", a); //undefined, pois o js sobe a declaração da variavel se necessario, porem não atribui o valor
//hoisting apenas com var
var a = 2;

console.log("a = ", a);

//com let daria erro

console.log(b); //erro
let b = 2;