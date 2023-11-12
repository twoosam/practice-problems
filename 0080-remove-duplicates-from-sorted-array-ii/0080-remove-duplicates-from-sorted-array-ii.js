/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let resultIndex = 2;
    for (let i = 2; i < nums.length; i++) {
        if(nums[resultIndex - 2] !== nums[i]) {
            nums[resultIndex] = nums[i];
            resultIndex++;
        }
    }
    return resultIndex;
};