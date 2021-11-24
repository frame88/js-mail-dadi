const validmail = ["franco@franchi",'mirellaalba@pupu.it','lucianoligabue@gmail.com','gallinein@fuga.it'];
let utente = prompt('inserisci la tua mail: ');
console.log(utente);
let find = true;

for (i = 0; i < validmail.length; i++) {
    if ( utente == validmail[i] ) {
        console.log("la mail è tra quelle valide, puoi proseguire");
    }
    else {
        console.log('non sei ben accetto');
    }
}