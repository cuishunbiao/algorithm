
function search2(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1
        }
    }
    return -1;
};

const nums21 = [6], target2 = 6
console.log(search2(nums21, target2));