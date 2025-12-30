let cajaDeAndy = "Woody";


//DATOS PRIMITIVOS

//String
let nombre = "Andy";

//Number
let edad = 10;

//Boolean
let esBonito = true;

//null
let soyUnNull = null;

//undefined
let soyUndefined = undefined;

//Symbol
let simboloUnico = Symbol("miSimbolo");

//BigInt
let numeroGrande = 9007199254741991n;

//Datos Complejos

//Object
let carro= {
    marca: "tesla",
    modelo: "model Y",
    anio: 2020
};

//Array
let frutas = ["manzana", "banana", "cereza"];

//Function

function saludar(){

}


//TIPO DE DATO STRING
let string1  = "Hola Mundo";
let string2 = 'javascript es genial';
let string3 = `${string1} feliz`;
let string4 = string1 + " " + string2;


//console.log(string1);
//console.log(string2);
//console.log(string3);
//console.log(string4);

let frase = 'Javascript es un lenguaje de programación';

console.log(frase.length); //Cantidad de caracteres
console.log(frase.toUpperCase()); //Mayúsculas
console.log(frase.toLowerCase()); //Minúsculas
console.log(frase.indexOf('lenguaje')); //Posición de la palabra
console.log(frase.slice(0, 10)); //Extraer parte de la cadena
console.log(frase.replace('Javascript', 'Python')); //Reemplazar parte de la cadena 