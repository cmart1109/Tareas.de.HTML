const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    return 'No se puede dividir por cero';
  }
  return num1 / num2;
}

function realizarOperacion() {
  rl.question(
    '\n¿Qué operación deseas hacer?\nsumar\nrestar\nmultiplicar\ndividir\nsalir\n',
    function (option) {
      if (option === 'salir') {
        rl.close();
        return;
      }
      
      if (option === 'sumar' || option === 'restar' || option === 'multiplicar' || option === 'dividir') {
        rl.question('Ingresa el primer número: ', function (num1) {
          rl.question('Ingresa el segundo número: ', function (num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let resultado;

            switch (option) {
              case 'sumar':
                resultado = sumar(num1, num2);
                break;
              case 'restar':
                resultado = restar(num1, num2);
                break;
              case 'multiplicar':
                resultado = multiplicar(num1, num2);
                break;
              case 'dividir':
                resultado = dividir(num1, num2);
                break;
            }

            console.log('El resultado es:', resultado);
            realizarOperacion();
          });
        });
      } else {
        console.log('Operación no válida. Por favor, elige una operación válida.');
        realizarOperacion();
      }
    }
  );
}

realizarOperacion();
