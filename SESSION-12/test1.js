/*
Higher order functions: those functions which,
 1. take other function as parameter(calledback func)
 2. or return a function as value(closure).

  - when we combine(enclose) a function inside other function and expose it. 
    To expose a function, return it or pass it to another function.
    the inner function have access to the outer function scope(variables etc)


 - lexical scope means definition space — not invocation space.
 - lexical scope refers to the visibility of variables and functions.

usage: we have a concept in OOP() encapsulation. local properties of an object have to be called 
only through obj. not from outside.

*/

function abc() {
    let var1 = 2; // var1 lexical scope is inside abc()
    function ab() { // ab is an inner function that create the closure
        console.log(var1); // inner function can use the outer function scope
    }
    return ab;
}
console.log(abc);


/*
 Example of a Function that return a function as value:
 Pythagorean theorem:
 c = Math.sqrt((a*a)+(b*b))
*/
// with normal function

function hypotenuse(a) {
    function side(b) {
        return Math.sqrt((a * a) + (b * b));
    }
    return side;
}

console.log(hypotenuse(3)(4));

// with arrow function

const hypotenuse = a => {
    const sideSqurRoot = b => {
        return Math.sqrt((a * a) + (b * b));
    }
    return sideSqurRoot;
}
console.log(hypotenuse(3)(4));

/*

0. console.log(hypotenuse(3)(4));
1. hypotenuse(3) => [a = 3, sideSqurRoot]
2. sideSqurRoot(4) => a = 3, [b = 4, 1096]
3. console.log(1096);

*/



const TopLevel = a => {
    const secondLevel = b => {
        const thirdLevel = c => {
            return 30 * a + 4 * b + Math.pow(2, c)
        }
        return thirdLevel
    }
    return secondLevel
}
console.log(TopLevel(2)(3)(10));

/*
In JavaScript, lexical scope refers to the visibility of variables and functions based on their position within
the source code. The lexical scope of a variable or function is determined by its location in the source code hierarchy.
When JavaScript code is executed, the scope chain is formed based on the nested hierarchy of functions.
Each inner function has access to the variables and functions defined in its outer functions and all the way up to
the global scope. This chain of nested functions and their scopes is called the scope chain.
The lexical scope is also known as static scope, since it is determined at the time of code compilation,
rather than at runtime. This means that the visibility of variables and functions can be determined simply by examining
the source code, without having to execute the code.

sourse : digital ocean

*/



