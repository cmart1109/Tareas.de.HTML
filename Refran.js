let miRefran = "Mas sabe el diablo por viejo, que por diablo";
let longitudRefran = miRefran.length;
let novenaLetra = miRefran.charAt(8);
let ultimaLetra = miRefran.charAt(longitudRefran - 1);
let indicePalabra = miRefran.indexOf("que");

while (indicePalabra < 0) {
    indicePalabra = miRefran.indexOf("a", indicePalabra + 1);
}

miRefran = miRefran.replace(miRefran.substring(indicePalabra, indicePalabra + 1), "xxx");

let refranMayusculas = miRefran.toUpperCase();

console.log("Refrán original:", miRefran);
console.log("Refrán con preposición reemplazada:", refranMayusculas);