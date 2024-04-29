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

//funzione random
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione controllo pari o dispari
function pariDispari(somma) {
    if (somma % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

document.getElementById('btn-paridispari').addEventListener('click', function () {


    let scelta = prompt('scegliere tra PARI o DISPARI');
    let numeroUtente;

    //Inserisci un numero compreseo tra 1 e 5 altrimenti inserisci di nuovo
    do {
        numeroUtente = parseInt(prompt('inserire un numero da 1 a 5'))
    } while (numeroUtente > 5 || numeroUtente < 0)

    console.log(scelta)

    // do {
    //     scelta = prompt('scegliere tra PARI o DISPARI')
    // } while (scelta != 'pari' || scelta != 'dispari')

    //inserisco numero Comuter con la funzione random
    const numeroComputer = random(1, 5)
    console.log(numeroComputer)
    console.log(numeroUtente)

    //sommo i numeri
    const somma = numeroComputer + numeroUtente
    console.log(somma)

    //Controllo se le somma è pari o dispari con la funzione
    let risultato = pariDispari(somma);


    //confronto risultato con sacelta
    if (scelta == risultato) {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }

});