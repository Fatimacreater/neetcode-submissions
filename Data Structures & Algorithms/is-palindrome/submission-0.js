class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let end = cleanStr.length-1;
    for (let i = 0; i < end; i++) {
        if (cleanStr[i] !== cleanStr[end]) {
            return false;
        }   
        end--;    
    }
    return true;
}
}
