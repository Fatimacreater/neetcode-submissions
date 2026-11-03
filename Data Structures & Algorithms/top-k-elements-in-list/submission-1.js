class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let map = new Map();
    let arr= []
    for (const element of nums) {
        map.set(element, (map.get(element) || 0) + 1);
    }
    arr.push(...map.entries())
    arr.sort((a,b)=> b[1]-a[1]);
    return arr.slice(0,k).map((val) => {return val[0]});
}
}
