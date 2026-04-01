class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          const freqMap = {};
        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        const buckets = new Array(nums.length + 1);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }

        for (let num in freqMap) {
            buckets[freqMap[num]].push(Number(num));
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
