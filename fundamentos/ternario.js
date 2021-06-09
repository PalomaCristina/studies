//operador terário, onde existem 3 comparações
//                     operador relacional | se true aparece aprovado, se false, aparece reprovado
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //posso retornar como função
//conferindo 
console.log(resultado(7.5)); //aprovado
console.log(resultado(4)); //reprovado

