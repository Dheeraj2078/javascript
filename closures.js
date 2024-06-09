// 18th June [SATURDAY]
// Closures

/* lexical environment => own environment record + reference to outer environment */

/*  Scope Chain => JS interpreter continues searching the lexical environment until it finds the variable or it reaches the global scope.  */

/* Closures */
/* A closure is the combination of a function bundled together 
with references to its surroundings state (lexical environment) */

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  //   y();
  return y;
}
var z = x();
console.log(z());
