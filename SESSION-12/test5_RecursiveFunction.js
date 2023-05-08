

/*
let's do it with Recursive function
*/

function power(base, exp) {
    if (exp == 0) {
        return 1
    }
    else {
        return base * power(base, exp - 1)
    }
}
console.log(power(2, 3));

// Steps: each function call 

// 1. power(2,3) => 2 * power(2,2)
// 2. power(2,2) => 2 * 2 * power(2,1)
// 3. power(2,1) => 2 * 2 * 2 * power(2,0)
// 4. power(2,0) => 2 * 2 * 2 * 1 = 8

// Big O : This function is being called recursively n times before reaching the base case so its O(n), 


// 7! =  7 * 6 * 5 * 4 * 3 * 2 * 1
function factorial(number) {
    if (number === 1) {
        return 1
    } else {
        return number * factorial(number - 1);
    }
}

console.log('Factorial: ', factorial(5));

// Big-O : O(n!)



// sum of 0-number
/*
we are going to define a function that take a number as a parameter and then return the 
some of all numbers from 1 until that number. for example; if we give it 5, the function should 
return the some of all numbers from 1 until 5;

*/
// 5 : 5 + 4 + 3 + 2 + 1
function series(number) {
    if (number === 0) {
        return 0
    }
    else {
        return number + series(number - 1)
    }
}

console.log('Serie: ', series(5));
