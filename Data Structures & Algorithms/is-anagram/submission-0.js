class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Check Length
        if (s.length !== t.length){
            return false
        }
        // Create Empty FrequencyMap (Counter)
        const count ={};

        // Check Characters in s 
        for (let char of s){
            count[char] = (count[char] || 0) + 1;
        }

        // Check Characters in t
        for (let char of t){
            if (!count[char]){
                return false;
            }
            count[char]--;
        }
        // Iff all checks are clear Return true
        return true;
        }
    }

