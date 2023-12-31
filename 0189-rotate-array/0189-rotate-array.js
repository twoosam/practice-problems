/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
 const n = nums.length;
  k = k % n;
  const rotated = nums.splice(n - k);
  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }
  for (let i = 0; i < k; i++) {
    nums[i] = rotated[i];
  }
};