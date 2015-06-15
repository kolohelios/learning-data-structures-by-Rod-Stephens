'use strict';

function factors(number){
  var foundFactors = [];
  while(number % 2 < 1){
    number /= 2;
    foundFactors.push(2);
  }
  var factorToCheck = 3;
  for(factorToCheck = 3; factorToCheck <= Math.sqrt(number); factorToCheck += 2){
    while(number % factorToCheck === 0){
      number /= factorToCheck;
      foundFactors.push(factorToCheck);
    }
  }
  if(number > 1){
    foundFactors.push(number);
  }
  return foundFactors;
}

console.log(factors(181));
