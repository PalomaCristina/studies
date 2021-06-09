console.log("sentença de código"); //pode ocupar mais de 1 linha
//js é organizado em sentenças de codigos que pode ou nao ter blocos e que pode terminar com ; ou não
{
    //bloco
}

//livro linguagem ambigua

var a = 1;  //quando trabalho com var, podemos redeclarar a variavel 2x
let b = 3;  //com let nao podemos declarar 2x a variavel

//var a = 20; 
//let b = 30;

console.log(a, b); //saida 20, e erro no b

const c = 500; //variavel menos flexivel, nao é possivel alterar seu valor, mais utilizada nessas ocasioes

const peso1 = 1.0;
const peso2 = Number("2"); //declarando o tipo de forma diferente

console.log(peso1, peso2);

console.log(Number.isInteger(peso1)); //true pois o valor declarado é 1.0, se fosse por ex 1.2 seria false

const av1 = 9.89;
const av2 = 6.54;

const total = av1 * peso1 + av2 * peso2;

const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //tofixed escolhe as casas decimais que serao exibidas

//toString() == converte o valor em string
//toString(2) == converte o valor em binario


