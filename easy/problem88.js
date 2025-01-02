/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var idx = 0;
  for (var i = nums1.length; i >= m; i--) {
    if (nums1[i] === 0 || nums1.length === 0) {
      nums1.splice(i, 1);
      nums1.push(nums2[idx]);
      idx++;
    }
  }

  nums1 = nums1.sort((a, b) => a - b);
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([], 0, [1], 1);
