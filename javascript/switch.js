switch(expresion) {
    case valor1:
    // Código a ejecutar si la expresión es igual a valor1
    break;
    case valor2:
    // Código a ejecutar si la expresión es igual a valor2
    break;
  // Puedes agregar más casos según sea necesario
    default:
    // Código a ejecutar si ninguno de los casos anteriores coincide
    break;
}

let expresion = 'papayas';

switch (expresion) {
    case 'naranjas':
        console.log('Las naranjas cuestan 20 pesos el kilo.');
        break;
    case 'manzanas':
        console.log('Las manzanas cuestan 43 pesos el kilo.');
        break;
    case 'plátanos':
        console.log('Los plátanos cuestan 30 pesos el kilo.');
        break;
    case 'mangos':
    case 'papayas':
        console.log('Los mangos y las papayas cuestan 25 pesos el kilo.');
        break;
    default:
        console.log('Lo siento, no contamos con ' + expresion);
}