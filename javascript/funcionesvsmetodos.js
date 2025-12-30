/*

function suma(a,b){
return a + b
}

suma (3,5)

console.log(typeof suma)
///function
*/
// 1.Pasar funciones como argumento -> callback

function a(){}
function b (a){
b(a)
}

//retorno de funciones

function a(){
    function b (){}
    return b
}

//asignar funciones a variables -> expresion de funcion 

const a = function (){}


// Tener propiedades y metodos

function a() {}
const obj = {}
a.call(obj)

//anidar funciones -> nested functions

function a(){
    function b(){
        function c(){

        }
        c()
    }
    b()
}
a()

//Almacenar funciones en objetos = metodo

const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage(){
        console.log('fire')
    }   
}

rocket.launchMessage()