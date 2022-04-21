// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente di inserire una parola.
const userWord = prompt("Inserisci una parola");
console.log(`La parole inserita è "${userWord}"`);

// Trasformo la parola dell'utente, nella parola speculare.
let invUserWord = "";

for (let i = userWord.length - 1; i >= 0; i--) {
    invUserWord += userWord[i];
    console.log(`La lettera ${[i + 1]} è ${userWord[i]}`);    
}

// Stampo il risultato
console.log(`La parola invertita è "${invUserWord}"`);

if (userWord === invUserWord) {
    console.log(`"${userWord}" è un palindromo!`);
} else {
    console.log(`"${userWord}" non è un palindromo...`);
}

// FUNZIONE
// function isThisAPalindrom(userWord) {
    
// }