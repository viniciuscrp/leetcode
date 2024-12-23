/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    var curr = map.get(s[i]);
    if ((i + 1) < s.length) {
      var next = map.get(s[i + 1]);
      if (next > curr) {
        curr = next - curr;
        i += 1;
      }
    }

    sum += curr;
  }

  return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
