// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente di inserire una parola.
const userWord = prompt("Inserisci una parola");
console.log(`La parole inserita è "${userWord}"`);

// Richiamo la funzione
const palindromResult = isThisAPalindrom(userWord);
console.log(palindromResult);

// FUNZIONE
/**
 * Descrizione: la funzione analizza una parola e dichiara se è un palindromo o no.
 * @param {string} userWord -> è la parola inserita dall'utente.
 * @returns {string} -> la parola userWord è/non è un palindromo.
 */
function isThisAPalindrom(userWord) {
    // Trasformo la parola dell'utente, nella parola speculare.
    let invUserWord = "";

    for (let i = userWord.length - 1; i >= 0; i--) {
        invUserWord += userWord[i];
        console.log(`La lettera ${[i + 1]} è ${userWord[i]}`);    
    }

    // Stampo il risultato
    console.log(`La parola invertita è "${invUserWord}"`);

    if (userWord === invUserWord) {
        return (`"${userWord}" è un palindromo!`);
    } else {
        return (`"${userWord}" non è un palindromo...`);
    }
}