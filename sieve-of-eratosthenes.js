'use strict';

function findPrimes(max){
  var numbers = [];
  for(var i = 2; i < max; i++){
    numbers.push(i);
  }
  numbers = numbers.filter(function(n){
    return n % 2 || n === 2;
  });
  for(var p = 3; p < Math.sqrt(max); p += 2){
    numbers = numbers.filter(function(m){
      if(p === m){return m; }
      return m % p;
    });
  }
  console.log(numbers.length + ' of the ' + max + ' are prime.');
}

findPrimes(900000);
