//Bucle en la que la ocnsola escriba Me encanta Javascript 10 veces//

// for(let i=1; i<=10; i++ ) {
//     console.log('Me encanta Javascript')
// }


//Escribe un bucle que recorra un array con numeros y escriba cada numero//

// let numeros = [2*2, 3*5, 9*3, 6*7]
// for(let i=0; i<=numeros.length; i++) {
//     console.log(numeros[i])
// }


//escribe bucle que evalue las notas de los estudiantes//
//Notas por encima de 70//

let notas = [99,20,100,100, 30, 40]
let limite = 70
let pasaron = 0
let nopasaron = 0
let total = notas.length

for(let i=0; i<=notas.length -1; i++) {
    //Este codigo recorre cualquier array//
    if (notas[i]<=limite) {
        nopasaron++;
    } else {
        pasaron++
    }
}
console.log('Pasaron '+pasaron+' estudiantes')
console.log('No pasaron ' + nopasaron+' estudiantes')
console.log('Hubieron un total de '+total+' notas')