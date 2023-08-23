const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero1 = 1;
let numero2 = 2;

function sumar() {
  let S = numero1 + numero2;
  console.log('El resultado es ' + S);
}

function rest() {
  let R = numero1 - numero2;
  console.log('El resultado es ' + R);
}

function multiply() {
  let M = numero1 * numero2;
  console.log('El resultado es ' + M);
}

function divide() {
  let D = numero1 / numero2;
  console.log('El resultado es ' + D);
}

function calculo() {
  rl.question(
    '\nQue operacion deseas hacer?\nsumar\nrestar\nmultiplicar\ndividir\nsalir\n',
    function (option) {
      switch (option) {
        case 'sumar':
          sumar();
          calculo();
          break;
        case 'restar':
          rest();
          calculo();
          break;
        case 'multiplicar':
          multiply();
          calculo();
          break;
        case 'dividir':
          divide();
          calculo();
          break;
        case 'salir':
          rl.close();
          break;
        default:
          console.log('Defina un valor que mire en la lista');
          calculo();
          break;
      }
    }
  );
}

calculo();
