/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return output;
};