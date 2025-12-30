//Spread
// 1.Copying an Array

const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]
console.log(originalArray)
console.log(copyOfAnArray)

//2. Combining Arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//3. creating arrays with additional elements

const basearray = [ 1,2,3]
const arraywithadds= [...basearray,4,5,6]

console.log(basearray)
console.log(arraywithadds)


//4. pass elements to fucntions

function sum (a,b,c){
    return a + b + c
}


const nume = [2,4,6]
const result = sum(...nume)

console.log(result)