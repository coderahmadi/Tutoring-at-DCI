/*  for in different shapes 'foreach', 'for of' and 'for in' 

0. forEach -- one method of each array */

const items = ["item1", "item2", "item3"];
const numbers = [1, 2, 3, 4, 5, 6, 7]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
const copyItems = [];


// 1-- different callback function
// 2-- for different array (arguments and --va)
// 3-- some operation

const backup_fruits = [];

fruits.forEach((fruit) => {
    backup_fruits.push(fruit);
});

backup_fruits.forEach((bk_fr) => { console.log(bk_fr); });

// -------------------------- two-------

// Number.isInteger():
// Array.isArray();
// example and funtion

console.log(Number.isInteger('1'));
console.log(Array.isArray({ a: 2, b: 1, c: 3, d: 4 }));

function differ(param) {
    if (Number.isInteger(param)) {
        return 'Input parameter was number';
    } else if (Array.isArray(param)) {
        return 'Input parameter was Array';
    } else if (typeof param === 'string') {
        return 'Input parameter was String';
    } else {
        return 'Input parameter was either Object or boolean';
    }
}

console.log(differ({ a: 1, b: 3, c: 5 }));



// ------------for of--
// 1. for of - 
// -- with integer array

for (let iterator of months) {
    console.log(iterator);
}




// 2. for in -
for (const key in months) {
    if (months.hasOwnProperty(key)) {
        const element = months[key]; // key is string
        console.log(element);
    }
}
// ------------------------------------------------------------------for Object------------

for (const property in numbers) {
    if (numbers.hasOwnProperty.call(numbers, property)) {
        const element = numbers[property];
        console.log(property, element);
    }
}



fruits.hasOwnProperty('3'); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined

// ----------------------------------------------------------for Object---------------
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false

const obj = { a: 1, b: 2, c: 3 };

// ---------------------------------------

