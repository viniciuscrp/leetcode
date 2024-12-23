/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var firstWord = strs[0];
  if (firstWord === '') {
    return '';
  }

  var prefix = '';
  var j = 1;
  while (j <= firstWord.length) {
    if (!strs.every(word => word.startsWith(firstWord.substring(0, j)))) {
      break;
    }

    prefix = firstWord.substring(0, j);
    j++
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["", "b"]));
console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
