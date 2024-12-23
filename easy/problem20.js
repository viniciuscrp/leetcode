/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var openingBrackets = ['(', '[', '{'];
  var closingBrackets = [')', ']', '}'];
  var stack = [];
  if (s.length === 1) {
    return false;
  }

  if (!closingBrackets.includes(s[s.length - 1])) {
    return false;
  }

  for (var i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.unshift(s[i]);
      continue;
    }

    if (closingBrackets.indexOf(s[i]) !== openingBrackets.indexOf(stack[0])) {
      return false;
    }

    stack.shift();
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("["));
console.log(isValid("(("));
console.log(isValid("(["));
