/* Write an ES2015 Version */
const double = arr => arr.map(val => val * 2);

/* Replace ALL functions with arrow functions */
const squareAndFindEvens = numbers => numbers.map(val => val **2).filter(square => square % 2 ===0)