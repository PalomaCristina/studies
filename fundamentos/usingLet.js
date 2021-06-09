var numero = 1;
{
     let numero = 2; //let é uma variavel de escopo, portanto é reconhecida apenas dentro de seu escopo
     console.log('dentro =', numero);
}
console.log('fora= ', numero);

//palavra reservada let tem escopo global, escopo de bloco e escopo de função
