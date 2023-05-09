// index.js - Lab 8
// Author: Evelyn (Evie) Gill
// Date: 5/8/23

// Constants

// Functions
var numbers = [4, 9, 16, 100, 121];

function calculate(x){
  var results = Math.sqrt(x);
  return results;
}

console.log("The square root of ", numbers[0], " is ", calculate(numbers[0]), ".");

console.log("The square root of ", numbers, " are ", numbers.map(calculate));

console.log("The double of the numbers are ",
numbers.map(function(x){
  var results = x * 2
  return results;
}));

console.log()
// this is an example function and this comment tells what it doees and what parameters are passed to it.
