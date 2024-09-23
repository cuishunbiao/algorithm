
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        // Check if mid is the target
        if (nums[mid] === target) return mid;

        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // Target is in the left half 
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1
};

const nums6 = [4, 5, 6, 7, 0, 1, 2], target6 = 0
console.log(search(nums6, target6));
