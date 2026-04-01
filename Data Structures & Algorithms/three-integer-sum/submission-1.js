class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        nums.sort((a, b) => a - b);

        for (let [i, a] of nums.entries()){
            if (i > 0 && a === nums[i - 1]){
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right){
                let threeSum = a + nums[left] + nums[right];
                if (threeSum > 0){
                    right -= 1;
                }
                else if (threeSum < 0){
                    left += 1;
                }
                else {
                    result.push([a, nums[left], nums[right]]);
                    left += 1;
                    while (nums[left] === nums[left - 1] && left < right){
                        left += 1;
                    }
                }
            }
        }
        return result;
    }
}
