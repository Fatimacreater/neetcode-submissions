class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let arr = new Array(26).fill(0);        
        for (let char of str) {
            let index = char.charCodeAt(0) - 97;
            arr[index]++;            
        }
        let key = arr.join(",");
        if (!map.has(key)) {
            map.set(key , [])
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());    
}
}
