/*
NodeList: ArrayList
  1. A collections  of iterable Node Objects. iterate using forEach
  2. Not an array object.

  querySelectorAll(selectors) output is in NodeList 
  

HTMLCollections : a collections of array-like objects, which iterable: iterate using (for...of)
   
  NodeObject.children    output is a collection

*/

const lines = document.querySelectorAll('.line');
console.log(lines.length);
lines.forEach(line => {
  console.log(line.innerText);
});

const main = document.querySelector('#mainId');
const childs = main.children;
console.log('Lenght: ', childs.length);
for (const child of childs) {
  console.log(child.innerText);
}

/*
there are two object types in JS

Native Object : 
 1. pre-defined or build-in JS Objects like, Array, Number etc...
 2. they are related to js programming can be runned in any host.

Host Objects:
  1. they are specific to hosting environment either Browser or Node.
  2. window and document objects are specific for browser environment.
  3. console can be runned in both Browser and Node hosting environment 

*/




