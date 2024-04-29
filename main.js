//Funzione Palindroma
function palindroma(parola) {
    parola = prompt('inserire parola')

    let risultato = 'PALINDROMA'

    // Creo cicolo per confrontare le lettere della parola
    for (let i = 0; i < parola.length; i++) {

        //creo variabile X per lettere crescenti
        let x = parola[i]
        //creo variabile Y per lettere decrescenti
        let y = parola[parola.length - 1 - i]

        //confronoto le lettere, se non coincidono stampare risultato NON PALINDROMA
        if (x != y) {
            risultato = 'NON PALINDROMA'
            document.getElementById('risultato-palindroma').innerText = `La parola ${parola} è ${risultato}`
            break
        }

        console.log('x', x)
        console.log('y', y)

    }
    //Stampa Risultato
    console.log(risultato)
    document.getElementById('risultato-palindroma').innerText = `La parola ${parola} è ${risultato}`

}

//Bottone per funzione palindroma
document.getElementById('btn-palindroma').addEventListener('click', palindroma);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let scelta = prompt('scegliere tra PARI o DISPARI');
let numeroUtente;
let risultato;
//Inserisci un numero compreseo tra 1 e 5 altrimenti inserisci di nuovo
do {
    numeroUtente = parseInt(prompt('inserire un numero da 1 a 5'))
} while (numeroUtente > 5 || numeroUtente < 0)

// do {
//     scelta = prompt('scegliere tra PARI o DISPARI')
// } while (scelta != 'pari' || scelta != 'dispari')
console.log(numeroUtente)

const numeroComputer = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
console.log(numeroComputer)

const somma = numeroComputer + numeroUtente
console.log(somma)

//controllo se somma è PARI o DISPARI
if (somma % 2 == 0) {
    risultato = 'pari'
    console.log('pari')
} else {
    risultato = 'dispari'
    console.log('dispari')
}

//confronto risultato con sacelta
if (scelta == risultato) {
    console.log('hai vinto')
} else {
    console.log('hai perso')

}
