/*
Un closure es una función que "recuerda" el entorno (variables) en el que fue creada, incluso después de que ese entorno ya no exista.

Características clave de los closures:

Permiten acceder a variables de una función exterior desde una función interior.
Mantienen vivas las variables incluso después de que la función exterior haya terminado.
Cada closure tiene su propio "entorno" de variables.
Los closures son muy útiles para:

Crear funciones con "memoria" (como en el ejemplo)
Implementar datos privados en JavaScript
Manejar callbacks y eventos manteniendo contexto

*/

function outerFunction(){
    let outerVariable = 'Soy una variable del exterior';
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}

const closureexample = outerFunction();
closureexample(); // Imprime: Soy una variable del exterior

function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

    const counterA = createCounter()
    counterA()
    counterA()

    const counterB = createCounter()
    counterB()

    function outer(){
        let message = "hello, "

        function inner (name){
            console.log(message + name)
        }
        return inner
    }

    const closureA = outer()
    const closureB = outer()
    

    closureA("alice")
    closureB("bob")