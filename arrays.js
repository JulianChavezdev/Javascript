// how to create an Array

//1. new array() or Array()

const fruits = Array('apple','banana','orange')
console.log(fruits)

const number = Array(1,2,3,4,5)
console.log(number)

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
    console.log(emptyArray)


const sports = ['soccer', ' tennis', 'rugbu']
console.log(sports)

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredient : 'milk', quantity: ' 1 cup'
    },
    false
]
console.log(recipeIngredients)

// accessing array elements

const firsfruit = fruits[0]
console.log(firsfruit)

// lenght property

const numberOfFruits = fruits.length
console.log(numberOfFruits) 