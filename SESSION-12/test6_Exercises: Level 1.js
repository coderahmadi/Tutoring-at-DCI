const countries = ['Finland', 'Deutschland', 'Sweden', 'Eityopia', 'Afghanistan', 'Denmark', 'Bolgarian', 'Turkiy', 'Iceland']
const names = ['Jamal', 'Yesim', 'Elina', 'Borislav']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Excercise 


// 1. Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country))
// 2. Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))
// 3. Use forEach to console.log each number in the numbers array.
numbers.forEach(number => { console.log(number); });
// 4. Use map to create a new array by changing each country to uppercase in the countries array.
const countToUpperCase = countries.map(country => country.toUpperCase());
console.log(countToUpperCase);

// 5. Use map to create an array of countries length from countries array.
const contLenghtArray = countries.map(country => country.length);
console.log(contLenghtArray);
// 6. Use map to create a new array by changing each number to square in the numbers array
sqrtNumArr = numbers.map(number => number *= number);
console.log(sqrtNumArr);
// 7. Use map to change to each name to uppercase in the names array
upperCaseName = names.map(nam => nam.toUpperCase());
console.log(upperCaseName);
// 8.Use map to map the products array to its corresponding prices.

// Use filter to filter out countries containing land.
const landCoutry = countries.filter(country => country.includes('land'));
console.log(landCoutry);
// Use filter to filter out countries having six character.
const countSix = countries.filter(country => country.length === 6);
console.log(countSix);
// Use filter to filter out countries containing six letters and more in the country array.
const countSix1 = countries.filter(country => country.length > 6);
console.log(countSix);
// Use filter to filter out country start with 'E';
const countE = countries.filter(country => country[0] === 'E');
console.log(countE);
// Use filter to filter out only prices with values.
const productPrices = countries.filter(country => country[0] === 'E');
console.log(productPrices);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.