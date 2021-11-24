const validmail = ["franco@franchi",'mirellaalba@pupu.it','lucianoligabue@gmail.com','gallinein@fuga.it'];
let utente = prompt('inserisci la tua mail: ');
console.log(utente);
let find = false;

for (i = 0; i < validmail.length; i++) {
    if ( utente == validmail[i] ) {
        find = true;
    }
}

if (find == false) {
    console.log('non sei ben accetto');
}
else {
    console.log("la mail è tra quelle valide, puoi proseguire");
}



