// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente di inserire una parola.
const userWord = prompt("Inserisci una parola");
console.log(`La parole inserita è "${userWord}"`);

// Richiamo la funzione
const palindromResult = isThisAPalindrom(userWord);
console.log(palindromResult);

// Risultato
if (palindromResult) {
    console.log(`La parola "${userWord}" è palindroma.`);
} else {
    console.log(`La parola "${userWord}" non è palindroma.`);
}

// FUNZIONE
/**
 * Descrizione: la funzione analizza una parola e dichiara se è un palindromo o no.
 * @param {string} userWord -> è la parola inserita dall'utente.
 * @returns {Boolean} -> restituirà vero o falso.
 */
function isThisAPalindrom(stringToCheck) {
    // Trasformo la parola dell'utente, nella parola speculare.
    let invUserWord = "";

    for (let i = stringToCheck.length - 1; i >= 0; i--) {
        invUserWord += stringToCheck[i];
        console.log(`La lettera ${[i + 1]} è ${stringToCheck[i]}`);    
    }

    // Stampo il risultato
    console.log(`La parola invertita è "${invUserWord}"`);

    let isPalindrom = false;
    if (stringToCheck === invUserWord) {
        isPalindrom = true;
    }
    return isPalindrom;
}