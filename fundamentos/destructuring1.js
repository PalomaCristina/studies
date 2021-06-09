// duas formas de escrita 
//recurso do ES2015
// {} ou []
//DESTRUCTURING SERVE PARA EXTRAIR DADOS DE ARRAYS OU OBJS  
const pessoa = { 
    nome: 'Paloma',
    idade: 5,
    endereco: {
        logadouro: "Rua tal",
        numero: 1000
    }
}

const {nome, idade } = pessoa //EXTRAIR do obj pessoa, idade e nome
console.log(nome, idade);

//posso ""clonar" outras variaveis dentro do destructuring

const {nome: n, idade: i} = pessoa
console.log(n, i); //mesmos valores de nome e idade

//posso atribuir valor padrão dentro do destructuring (se nao tiver valor fora, por padrão será definido esse valor)
const {aparencia, humor = true} = pessoa
console.log(aparencia, humor); //undefined, true

const {endereco: {logradouro, numero}} = pessoa //cria apenas logradouro e numero


