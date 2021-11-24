const validmail = ["franco@franchi",'mirellaalba@pupu.it','lucianoligabue@gmail.com','gallinein@fuga.it'];
let utente = prompt('inserisci la tua mail: ');
console.log(utente);
let find = false;
let esito = document.querySelector('.container');


for (i = 0; i < validmail.length; i++) {
    if ( utente == validmail[i] ) {
        find = true;
    }
}

if (find == false) {
    console.log('la mail non è idonea');
    esito.append('la mail non è idonea');
}
else {
    console.log("la mail è tra quelle valide, puoi proseguire");
    esito.append('la mail è tra quelle valide, puoi proseguire');
}



