//random significa numeros aleatorios

function rand({min = 0, max = 1000}) { //aqui usando o operador destructuring
const valor = Math.random() * (max - min)+ min; 
return Math.floor(valor)
}

//formas de poder apresentar esses valores
console.log(rand({max: 50, min:40}));
//ou
const obj = { max: 50, min: 40 }
console.log(rand(obj));

console.log(rand());

