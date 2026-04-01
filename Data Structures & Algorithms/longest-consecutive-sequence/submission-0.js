class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let numSet = new Set(nums);
        let longest = 0;

        for (let n of numSet){
            if (!numSet.has(n -1)){
                let length = 0;
                while (numSet.has(n + length)){
                    length += 1;
                }
                longest = Math.max(length, longest)
            }
        }
        return longest;
    }
}
