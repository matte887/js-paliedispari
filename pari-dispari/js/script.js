// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di scegliere pari o dispari. Poi gli chiedo un numero da 1 a 5.
const userOddOrEven = prompt("Pari o dispari?").toLowerCase();
console.log(`Hai scelto ${userOddOrEven}`);
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5."));
console.log(`Hai scelto il numero ${userNumber}`);

// Creo una variabile per richiamare la funzione che genera un numero random da 1 a 5.
const pcNumber = randomNumber();
console.log(`Il PC ha scelto il numero ${pcNumber}`);

// Sommo i due numeri
const sum = userNumber + pcNumber;

// Creo una variabile per richiamare la funzione che determina se un numero è pari o dispari.
const resultOddOrEven =  oddOrEven(sum);

// Dichiaro il vincitore
if (resultOddOrEven === userOddOrEven) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

// FUNCTIONS

/**
 * Descrizione: la funzione genera un numero random da 1 a 5.
 * @returns {number}
 */
function randomNumber () {
    const randomOneToFive = Math.floor(Math.random() * 5) + 1;
    return randomOneToFive;
}

/**
 * Descrizione: l'input del programma è un numero. Il programma stabilisce se si tratta di un numero pari o dispari.
 * @param {number} sum
 * @returns {string} Il risultato è una stringa con scritto "Pari" o "Dispari"
 */
function oddOrEven(sum) {
    let result;
    if (sum % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

