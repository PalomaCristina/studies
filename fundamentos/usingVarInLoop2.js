const funcs = [] //array vazio

for (var i = 0; i < 10; i++) { //var não tem escopo de função
    funcs.push(function(){ //função anonima
        console.log(i);
    })
}

funcs[2]()
funcs[8]()