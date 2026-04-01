class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let result = 0;
        let left = 0;
        let maxf = 0;

        for (let r= 0; r < s.length; r++){
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxf = Math.max(maxf, count[s[r]]);
            
        while ((r - left + 1) - maxf > k){
            count[s[left]] -= 1;
            left += 1
        } 
        result = Math.max(result, r - left + 1)
        
        }
        return result;
    }
}
