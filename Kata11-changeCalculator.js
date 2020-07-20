/*
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change 
that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
*/


const calculateChange = function(total, cash) {
  let change = cash - total; 
  let returnValue = {};
  const coinNames = ['twenty', 'ten', 'five', 'two', 'one', 'quarter', 'dime', 'nickel', 'penny'];
  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let coinAmount;

  for(let i = 0; i < coinValues.length; i++){
    coinAmount = Math.floor(change / coinValues[i]);
    if(coinAmount > 0){
      returnValue[coinNames[i]] = coinAmount;
      change = change % coinValues[i];
    }
  }
  return returnValue;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));