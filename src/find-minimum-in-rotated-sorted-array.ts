
function findMin(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let left = 0, right = nums.length - 1;
    let middle = 0
    while (left < right) {
        middle = Math.floor((left + right) / 2)
        if (nums[middle] <= nums[right]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return nums[left]
};

const nums9 = [3, 1, 2]
console.log(findMin(nums9));