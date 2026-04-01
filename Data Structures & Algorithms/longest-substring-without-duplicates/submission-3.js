class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0;

        const seen = new Set();
        let left = 0;
        let result = 0;

        for (let right = 0; right < s.length; right++){
            const ch = s[right];
            while (seen.has(ch)){
                seen.delete(s[left]);
                left += 1;
            }
            seen.add(ch);
            result= Math.max(result, right - left + 1);
        }
        return result;
        
    }
}
