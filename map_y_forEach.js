// methods that iterate over an array
//methods that do not modify the original array (inmutability)

// map()

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squaredNumbers  )


// forEach

const colors = ['red','pink','blue']
const iteraredColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteraredColors)


//exercise: fahrenheit to celcius conversion

const temperaturesInFahrenheit = [32,68,95,104,212]
const fahrenheitConverted = temperaturesInFahrenheit.map(num => (5/9) * (num - 32))

console.log(fahrenheitConverted)



//exercise2 : sum of elements in an array

const newNumbers = [1, 2 , 3 , 4 , 5]
let sum = 0

newNumbers.forEach(number => {
    sum = sum + number
})

console.log(newNumbers)
console.log(sum)