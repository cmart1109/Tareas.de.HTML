// for (let i = 0; i <9; i++) {
//     n += i;
//     mifuncion(9);
// }
// let x = []
// for (let i = 1; i <= 10; i++) {
//     x.push(i)
// }
    //Para poder convertir los datos de un ciclo for a un array //

// }
// console.log('Ahora vamos al Inverso')
// for (let i2 = 10; i2 > 1; i2--) {
// }
// console.log(x)

//==================================================//
// CICLO FOR ...OF//
//Pasara cada dato de un array a una variable//

// let f = [1,3,5,7,9,11,13,17]

// for(let i=0; i<=6; i++) {
//     console.log(f[i]);
//}

// AHORA CON PALABRAS=====================//
// let a = 'Hierba mala nunca muere'
// let invertido = []

// for(let m = 0; m < a.length; m++) {
//     console.log(a[m])
// }

// ahora invertido

let a = 'Hierba mala nunca muere'
let invertido = []

for(let m = a.length-1; m >=0; m--) {
    invertido.push(a[m])
    
}
let resultado = invertido.join(' ')
console.log(resultado)
