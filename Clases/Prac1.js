//Comencemos con una práctica básica de arrays .

let myArray = ['Dinero', 'novia', 'Amigos']
let length = myArray.length
console.log(length)
myArray[0] += ' En Dolares'
myArray[1] += ' de la Calera'
console.log(myArray)
myArray.push('Videojuegos')
console.log(myArray)
let StringN = myArray.join('-')
console.log(StringN)

//Practica avanzada. Crea un array con varios elementos de diferentes tipos. La regla es que por lo menos un elemento pertenezca a cada tipo de dato primitivo que acabamos de ver. Recuerdas cuales eran? //

let Array2 = [22, 'Spiderman', true, 'Hulk', 3.1416]
let long = Array2.length
    Array2[0] += 42
    Array2[1] += ' Negro'
    Array2[2] = false
    Array2[3] += ' Verde'
    Array2[4] -= 0.1416

    console.log(Array2)
    
    Array2.push('Ironman')
    console.log(Array2)
    let string3 = Array2.join('-')
        console.log(string3)