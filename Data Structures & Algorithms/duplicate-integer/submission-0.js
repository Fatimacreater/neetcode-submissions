class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set(nums);
        console.log(set)
        if(set.size !== nums.length){
            return true
        }
        else {
            return false
        }; 
    }
}
