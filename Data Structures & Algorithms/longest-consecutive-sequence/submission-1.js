class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if (nums.length === 0) return 0;
      
    let set = new Set(nums);
    let longestStreak = 0;

    for (const i of set) {
        if (!set.has(i-1)) {
            let current = i;
            let count = 1;
            while (set.has(current+1)) {
                current++;
                count++;
            }
          longestStreak = Math.max(count , longestStreak);
        }
    };
    return longestStreak;
}
}
