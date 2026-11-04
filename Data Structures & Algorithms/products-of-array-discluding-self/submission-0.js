class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let output = new Array(nums.length);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    };
    let surfix = 1;
    for (let i = nums.length -1; i >=0 ; i--) {
        output[i] *= surfix;
        surfix *= nums[i];
    };
    return output;
}
}
