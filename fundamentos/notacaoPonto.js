console.log(Math.ceil(6.1)); //ceil == teto, portanto está solicitanto o teto de 6.1 

const obj1 = {}
obj1.nome= 'bola'; //posso fazer assim (mais comum)
obj1['nome'] = 'bola2'; //ou assim == mesmo resultado

console.log(obj1.nome); //'bola2' vai sobescrever o 'bola'
console.log(obj1);

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);