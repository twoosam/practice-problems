/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = nums2.length; i > 0; i--) {
      nums1.unshift(nums2[0])
      nums1.pop()
      nums2.shift()
  }
  nums1.sort((a, b) => a-b)
};