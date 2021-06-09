function tratarErroELancar(erro) {
   // throw <informação do erro>
    //throw 'ocorreu um errooo' //3º e lança no throw
    //no throw, posso adcionar vários tipos de dados, como obj, string, number...
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}

function imprimirNomeGritado(obj) { //coloquei como parametro um obj

    try{ //1º try é uma função que eu uso quando achar que vai haver algum erro
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch(e) {
        tratarErroELancar(e) //2º o erro cai dentro do catch 
    }  finally { //o finally é executado mesmo quando ouve erro ou sucesso, sempre no final de tudo
        console.log('final');
    }
}
const obj = {
    name: 'Roberto'
}
imprimirNomeGritado(obj)
