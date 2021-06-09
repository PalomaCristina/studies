console.log(7 / 0 ); //saida numero infinito, quantos mais 0 colocarmos na divisão, maior o numero será
console.log("10" / 2); //saida: 5
console.log("show" * 2) //saida: NaN 
console.log(8.1 * 0.7 ); //numero grande, impresição
//console.log(10.toString); //da erro

const a = {name: 'teste'}
const b = a; //b recebe o valor de a

console.log(a);
console.log(b);

b.name = 'hehe'; //como b e a estão com o mesmo endereço de memoria do objeto, se eu alterar o valor de b, estou alterando tbm o valor de a
//ISSO SÓ OCORRE COM O OBJETO
console.log(a);
console.log(b);