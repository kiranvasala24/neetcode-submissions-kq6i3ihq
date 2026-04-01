class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (target === nums[mid]) {
            return mid;
        }
        
        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {
            // Is target in the sorted left half?
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;  // Search left
            } else {
                left = mid + 1;   // Search right
            }
        } 
        // Right half must be sorted
        else {
            // Is target in the sorted right half?
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;   // Search right
            } else {
                right = mid - 1;  // Search left
            }
        }
    }
    
    return -1;
    }
}
