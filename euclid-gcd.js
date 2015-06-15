'use strict';

function gcd(a, b){
  while(b !== 0){
    var remainder = a % b;
    b = gcd(b, remainder);
    a = b;
    b = remainder;
  }
  return a;
}

console.log(gcd(333, 27));
