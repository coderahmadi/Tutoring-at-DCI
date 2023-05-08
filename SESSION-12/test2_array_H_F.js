// every: Check if all the elements are similar in one aspect. It returns boolean
const names = ['Jamal', 'Yesim', 'Elina', 'Borislav']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
const boolsArr = [true, true, true, true]
const areAllTrue = boolsArr.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true
