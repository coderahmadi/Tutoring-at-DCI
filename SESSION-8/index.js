// break and continue
let firstName = 'jamal';
// switch (firstName) {
//     case 'jamal':
//         break
// }
// as the loop reach to 3 , it should stop
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break // break will exit the FOR loop
    }
    console.log(i);
}

/*

I want to make a program to return the first number that is divisible by 3 
and the number should be greater than 20
*/
// control structure 
let count = 0;
for (let i = 20; ; i++) { // We do not specify end of the loop, the loop 
    if (i % 7 === 0) {
        count++
        console.log(`Found ${count}:`, i);
    }
    if (count === 2) {
        break;
        // any things here will not be executed
    }
}

/*
Function Recursion:
when we call function inside itself. this ability can be used as useful tools for 
doing some task in JS, like, factorial
*/


function sayHello(name) {
    console.log('Hello', name);
}

sayHello('Yesim');
sayHello('Manalo');
/*
x to the power of y, 
base to the power of exponent
2 to the power of 3 = 8
2*2*2 = 8
*/
// with simple function
function calcPower(base, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= base;
    }
    return result;
}
console.log(calcPower(2, 3));


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