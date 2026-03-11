/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  if (x === 0) {
    return true;
  }

  const arr = [];
  const reverse = [];
  let number = Math.abs(x);
  while (number > 0) {
    const lastDigit = number % 10;
    reverse.push(lastDigit);
    arr.unshift(lastDigit);
    number = Math.floor(number / 10);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reverse[i]) {
      return false;
    }
  }

  return true;
};