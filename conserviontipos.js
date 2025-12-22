//conversion de tipos explicita

const string = "123";
const integer = parseInt(string); //convierte a entero

console.log(integer); //123
console.log(typeof integer); //number

const stringDecimal = "123.45";
const floatNumber = parseFloat(stringDecimal); //convierte a decimal

console.log(floatNumber); //123.45
console.log(typeof floatNumber); //number

const binary = "1010";
const decimal = parseInt(binary, 2); //convierte de binario a decimal
console.log(decimal); //10


//conversion de tipos implicita
const suma = "5" + 10; //el numero 10 se convierte a string
console.log(suma); // "510"
console.log(typeof suma); //string

const sumwithboolean = "5" + true; //el boolean true se convierte a 1
console.log(sumwithboolean); // "5true"
console.log(typeof sumwithboolean); //string

const sumwithnumber = 2 + true; //el boolean true se convierte a 1
console.log(sumwithnumber); //3
console.log(typeof sumwithnumber); //number