/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var startIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[startIndex]) {
      nums[++startIndex] = nums[i];
    }
  }
 
  return startIndex + 1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

