const [a] = [10];

console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; //7 e 8 serão ignorados
console.log(n1, n3, n5, n6);

//um array pode ter outros elementos do tipo array dentro de si
//nesse caso abaixo, o primeiro elemento, estou ignorando ele, no segundo elemento é um array também, ignoro também o primeiro elemento dele e chamo o segundo "nota"
//isso é uma matriz == arrays dentro de arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota); // 6
 
