'use strict';

function linearCongruentialGenerator(seed){
  var a = 5, b = 3, m = 8;
  return (seed * a + b) % m;
}

var rand = 0;
for(var i = 0; i < 10; i++){
  rand = linearCongruentialGenerator(rand);
  console.log(rand);
}
