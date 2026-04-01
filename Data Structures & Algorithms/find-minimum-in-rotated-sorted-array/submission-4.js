class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
         let left = 0;
    let right = nums.length - 1;

    while (left < right) {  // ✅ Fixed: < not <=
        // Optimization: already sorted, no rotation
        if (nums[left] < nums[right]) {
            return nums[left];
        }
        
        let mid = Math.floor((left + right) / 2);  // ✅ Fixed: Added Math.floor
        
        if (nums[mid] > nums[right]) {  // ✅ Fixed: Compare with right
            left = mid + 1;
        } else {
            right = mid;  // ✅ Fixed: mid not mid - 1
        }
    }
    
    return nums[left];  // ✅ Fixed: Outside loop
    }
}
