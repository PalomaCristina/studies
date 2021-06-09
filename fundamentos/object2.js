console.log(typeof Object); //function
console.log(typeof new Object); //object == estou instanciando um obj

const Client = function() {}
console.log(typeof Client); //function
console.log(typeof new Client); //object 

class Product {} //é apenas um detalhe de sintaxe, porem internamente é uma função
console.log(typeof Product); //function
console.log(typeof new Product); //object / quando eu instancio uma função, cria-se um objeto
