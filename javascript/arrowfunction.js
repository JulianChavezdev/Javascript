/*
const almuerzo = (proteina, verdura) => {
    return '${proteina} ${verdura}'
    }

    almuerzo('pollo', 'ensalada')
*/

//funcion normal
const greeting = function (name){
    return 'hi, ${name}'
}


//arrow funcion explicito
const newGreeting =(name) =>{
    return 'hi, ${name}'
}

//arrow funcion implicito

const newGreetingImplicit = name => 'hi, ${name}'
const newGreetingImplicitwithtoparameters = (name,second) => 'hi, ${name}'

//lexical binding
const finctionalCharacter= {
    name: 'Uncle Ben',
    messageWithTraditionlFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) =>{
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionlFunction(`With great power, comes great responsibility.`)
finctionalCharacter.messageWithArrowFunction(`With great power, comes great responsibility`)