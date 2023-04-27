/*
Task 1

Given an array of objects where every object represents an order with 2 properties:

- `id`: a unique numerical identifier 
- `amount`: a quantity


Use `reduce()` to get the total amount of all orders.
*/

const orders = [
    {
        id: 1,
        amount: 250
    },
    {
        id: 2,
        amount: 400
    },
    {
        id: 3,
        amount: 100
    },
    {
        id: 4,
        amount: 325
    }
];

const totoalAmount = orders.reduce((acc, indValue) => { return acc + indValue.amount }, 0);
console.log(totoalAmount);


/*
Task 2

Given a string, use the `reduce()` method to get a new string containing only 
the initials of each word, capitalised

Expected output:
RTFM

*/

const string = "read the friendly manual";
let arr_string = string.split(' ');

const newString = arr_string.reduce((accString, singleElement) => {
    return accString + singleElement[0].toUpperCase()
}, '');
console.log(newString);

/*
Task 3

Given an array with strings, use the `reduce()` method to 
combine the strings together and get an output like this:

Fruit salad: banana - apple - kiwi - mango - strawberries
*/

const fruits = ["banana", "apple", "kiwi", "mango", "strawberries"];
const newString1 = fruits.reduce((accStr, indiv) => accStr + ' - ' + indiv)
console.log(newString1);


/*
Task 4

Given an array of prices, use the `reduce()` method to 
calculate the sum of all the numbers in the array

Expected result:
200
*/


const prices = ["19€", "109€", "60€", "12€"];
const sumOfPrices = prices.reduce((sumAcc, indivi) => { return sumAcc + Number(indivi.slice(0, indivi.length - 1)) }, 0);
console.log(sumOfPrices);


/*
Task 5

Given an array with person objects, use the `reduce()` method to create a new 
object where users are grouped by city.

Expected output:
{
  "New York": [
    {name: "Jake Smith", age: 20, city: "New York"},
    {name: "Pete Peterson", age: 31, city: "New York"},
    {name: "Martha Marty", age: 38, city: "New York" },  
  ],
  "London": [
    {name: "Anne Annson", age: 24, city: "London"},
    {name: "Philip Flip", age: 36, city: "London"},
  ],  
  "Rome": [
    {name: "Renato Romolo", age: 36, city: "Rome"},
  ],
}
*/


const users = [
    { name: "Jake Smith", age: 20, city: "New York" },
    { name: "Anne Annson", age: 24, city: "London" },
    { name: "Pete Peterson", age: 31, city: "New York" },
    { name: "Martha Marty", age: 38, city: "New York" },
    { name: "Renato Romolo", age: 36, city: "Rome" },
    { name: "Philip Flip", age: 36, city: "London" },
];

const newObject = users.reduce((accUser, user) => {
    if (accUser[user.city]) {
        accUser[user.city].push(user)
    } else {
        accUser[user.city] = []
        accUser[user.city].push(user)
    }
    return accUser
}, {});
console.log(newObject);

