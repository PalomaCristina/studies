var numero = 1 
{
    var numero = 2 
    console.log('dentro =',numero); //var é global, portanto ela vai subescrever o let, o resultado será 2 para os dois
}

console.log('fora =', numero); //resultado = 2