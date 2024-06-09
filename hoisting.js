/*
function declarations are moved to the top of their containing 
scope during the compilation phase. This means that you can use 
variables and functions before they are declared in the code, 
as JavaScript essentially "hoists" these declarations to the top.

And how does it happens ?
We know that while compiling, global execution context is created
and all varibale and functions are assigned memory. variables are 
initilized with undefined and functions are allocated as it is in
memory. So, when using those variables (even before their declaration),
they already had those variables in memory.
*/

console.log(hoistedFunction()); // Output: "This function has been hoisted"

function hoistedFunction() {
  return "This function has been hoisted";
}

console.log(x);
var x = 10;

// Hoising with let ans const
console.log(y); // this will give reference error
let y = 10;

/* 
In case of let and const, hoisting is done in different way. 
That is, let and const variable get memory but in some different space. 
And we can't access until it's initialization

The time from vairable get hoisted until it get initialized is 
called Temporal dead zone. Variable in TDZ cannnot be accessed,
and will give reference error when get accessed in TDZ.
So anyting above line number 25 is TDZ for y
 */
