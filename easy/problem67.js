/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var carry = 0;
  var len = (a.length > b.length ? a.length : b.length);
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  var sum = [0];
  for (var i = 0; i < len; i++) {
    var aBit = i < a.length ? Number.parseInt(a[i]) : 0;
    var bBit = i < b.length ? Number.parseInt(b[i]) : 0;
    var result = Math.floor((aBit + bBit + sum[i]) % 2);
    carry = Math.floor((aBit + bBit + sum[i]) / 2);
    sum[i] = result;
    sum.push(carry);
  }

  sum = sum.reverse().join('').toString();
  return sum[0] === '0' ? sum.toString().substring(1) : sum;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(addBinary("1", "1"));
