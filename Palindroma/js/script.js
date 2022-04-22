// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente di inserire una parola.
const userWord = prompt("Inserisci una parola");
console.log(`La parole inserita è "${userWord}"`);

// Richiamo la funzione
const palindromeResult = isThisAPalindrome(userWord);
console.log(palindromeResult);

// Risultato
if (palindromeResult) {
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
function isThisAPalindrome(stringToCheck) {
    // Trasformo la parola dell'utente, nella parola speculare.
    let invUserWord = "";

    for (let i = stringToCheck.length - 1; i >= 0; i--) {
        invUserWord += stringToCheck[i];
        console.log(`La lettera ${[i + 1]} è ${stringToCheck[i]}`);    
    }

    // Stampo il risultato
    console.log(`La parola invertita è "${invUserWord}"`);

    let isPalindrome = false;
    if (stringToCheck === invUserWord) {
        isPalindrome = true;
    }
    return isPalindrome;
}