class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         // Map: signature -> list of anagrams
        const map = {};

        for (const word of strs) {
            // Frequency array for 26 lowercase letters
            const freq = new Array(26).fill(0);

            // Count characters in the word
            for (const char of word) {
                freq[char.charCodeAt(0) - 97]++; // 97 = 'a'
            }

            // Convert frequency array into a unique key
            const key = freq.join('#');

            // Group words by their key
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(word);
        }

        // Return grouped anagrams
        return Object.values(map);
    }
}
