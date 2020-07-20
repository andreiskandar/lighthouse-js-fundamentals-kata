/*
For this kata, we'll be adding only the numbers in the array which match the given condition.

Input
const conditionalSum = function(values, condition) {
  // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

Expected Output
6
9
144
0

*/

const conditionalSum = function(values, condition) {
  if(values.length === 0) return 0;

  let i = 0;
  let sum = 0;

  while(i < values.length){
    if(condition === 'even' && values[i] % 2 === 0){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 === 1){
      sum += values[i];
    }
    i++;
  }

  return sum; 
};
