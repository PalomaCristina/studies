//par nome/valor ou chave/valor

const saudacao = 'olá'; //contexto léxico
//    nome       valor

function exec() {
    const saudacao = 'falaaa'; //contexto lexico 2 == defini uma const dentro de uma função
    return saudacao;
}

//objetos sao grupos aninhados de pares nome/valor
const client = { //objeto
    nome: 'Paloma',
    idade: 32,
    peso: 55,
    endereco:{ //outro objeto dentro de um obj
        logadouro: 'Rua januario pedro de ...',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(client);