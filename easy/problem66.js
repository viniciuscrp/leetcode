/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1] += 1;
  if (digits[digits.length - 1] === 10) {
    if (digits.length === 1) {
      digits[0] = 0;
      digits.unshift(1);
      return digits;
    }
     
    for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 10) {
        digits[i] = 0;
        if (digits[i - 1]) {
          digits[i - 1] += 1;
        } else {
          digits.unshift(1);
        }
      }
    }
  }

  return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
