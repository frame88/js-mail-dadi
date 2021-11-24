let numpc = Math.floor((Math.random() * 6) + 1);
let numuser = Math.floor((Math.random() * 6) + 1);
console.log(numuser,numpc);
let risultato = document.querySelector(".container");

if (numpc > numuser) {
    console.log('ha vinto il computer');
    risultato.append('ha vinto il pc con ',numpc);
}
else if (numpc == numuser) {
    console.log('pareggio');
    risultato.append('pareggio ',numpc,'-',numuser);
}
else {
    console.log('hai vinto tu');
    risultato.append('hai vinto tu con ',numuser);
}