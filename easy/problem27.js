/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var startIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[startIndex] = nums[i];
      startIndex++;
    }
  }

  return startIndex;
};

console.log(removeElement([3,2,2,3], 3));
