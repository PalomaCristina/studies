{
    {
        {
            {var sera = "será????"}
            console.log(sera); //dentro de um escopo, uma variavel funciona
        }
    }
}
console.log(sera); //fora do escopo funciona tbm, chamamos de global

//caso a var seja declarada dentro de uma função, ela funcionara apenas dentro do escopo da função

function teste() {
    var local = 123;
    console.log(local); //consigo acessar ela dentro da funcao
}
teste()
console.log(local); //ERRO!! nao consigo acessar ela fora da função

//O PROBLEMA DE VAR E LET QUE SÃO ESCOPOS GLOBAIS É QUE ELA É FACILMENTE REESCRITA