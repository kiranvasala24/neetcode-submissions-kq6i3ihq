class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";

        const need = {};
        let missing = t.length;

        for (let char of t){
            need[char] = (need[char] || 0) + 1;
        }
        let left = 0, start = 0, minLen = Infinity;

        for (let right = 0; right < s.length; right++){
            if (need[s[right]] --> 0) {
                missing--;
            }
            while (missing === 0){
                if (right - left + 1 < minLen){
                    minLen = right - left + 1;
                    start = left;
                }
                if (++need [s[left++]] > 0){
                    missing++;
                }
            }
        }
        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}
