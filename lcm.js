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

function lcm(a, b){
  return (a / gcd(a, b)) * b;
}

console.log(lcm(45, 66));
