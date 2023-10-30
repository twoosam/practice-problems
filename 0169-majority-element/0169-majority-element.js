/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {};
    for (let i = 0; i <nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]]++;
        } else {
            count[nums[i]] =1;
        }

        if (count[nums[i]] > nums.length/2) {
            return nums[i];
        }
    }
};