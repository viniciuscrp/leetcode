/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var steps = 0;
  var oddNum = 1;
  while (x >= oddNum) {
    x = x - oddNum;
    oddNum += 2;
    steps++;
  }
  
  return steps;
};

console.log(mySqrt(0));
