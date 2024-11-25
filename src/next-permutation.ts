/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    // Find the first ascending pair from right to left
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        // Find the first number larger than nums[i] from right to left
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    // Reverse the subarray from i+1 to end
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--;
    }
};