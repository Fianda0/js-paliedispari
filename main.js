

let parola = prompt('inserire parola')
console.log(parola)
console.log(parola.length)
let risultato = 'palindroma'

// Creo cicolo per confrontare le lettere della parola
for (let i = 0; i < parola.length; i++) {

    //creo variabile X per lettere crescenti
    let x = parola[i]
    //creo variabile Y per lettere decrescenti
    let y = parola[parola.length - 1 - i]

    //se le lettere non coincidono stampare risultato NON PALINDROMA
    if (x != y) {
        risultato = 'non palindroma'
        break
    }

    console.log('x', x)
    console.log('y', y)

}
//Stampa Risultato
console.log(risultato)