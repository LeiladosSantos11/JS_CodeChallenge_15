//Here's your puzzle:
//Write a function greaterThanLessThan that
//takes three arguments, a, b, and c, and returns a boolean(true or false), such that:

function greaterThanLessThan(a, b, c) {
  return a < b < c === true;
}

console.log(greaterThanLessThan(3, 2, 1);
// === true;
console.log(greaterThanLessThan(700000000001, 700000000002, -1));
// === false;
