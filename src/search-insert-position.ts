
function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return left
};

const nums23 = [1, 3, 5, 6], target5 = 5
console.log(searchInsert(nums23, target5));
