function rand([min = 0, max = 1000]) {
    if (min > max ) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40])); //definindo os limites de max e min
console.log(rand([995])); //min (max seria 1000 por padrão)
console.log(rand([, 10])); // min por padrão e max 10
console.log(rand()); //undefined