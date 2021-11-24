let numpc = Math.floor((Math.random() * 6) + 1);
let numuser = Math.floor((Math.random() * 6) + 1);
console.log(numuser,numpc);

if (numpc > numuser) {
    console.log('ha vinto il computer');
}
if (numpc == numuser) {
    console.log('pareggio');
}
else {
    console.log('hai vinto tu');
}