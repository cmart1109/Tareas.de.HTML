//======================================== Sumas de los arrays ========================================================//

console.log('Es hora de revisar el array');
let array = [1.22,45,67.45,24,73,71]
let suma = 0
function sum() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        suma += array[i]
        
    }
}

sum()
console.log('La suma de todos los numeros es de '+suma);