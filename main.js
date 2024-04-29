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

document.getElementById('btn-palindroma').addEventListener('click', palindroma);

