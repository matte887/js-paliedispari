// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
console.log(userWord);

// Trasformo la parola dell'utente, nella parola letta da destra a sinistra
let invUserWord = "";

for (let i = userWord.length - 1; i >= 0; i--) {
    invUserWord += userWord[i];
    console.log(userWord[i]);    
}

console.log(invUserWord);

// FUNZIONE
// function isThisAPalindrom(userWord) {
    
// }