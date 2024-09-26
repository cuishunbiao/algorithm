function findMin(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    // 如果比 right 的数小，则 right =  middle -1，如果比 right 的数大，则 left = middle+1
    let left = 0, right = nums.length - 1;
    let middle = 0
    while (left < right) {
        debugger
        middle = Math.floor((left + right) / 2)
        if (nums[middle] < nums[right]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        if (left === right) return nums[Math.floor((left + right) / 2)]
    }
    return nums[middle]
};

const nums9 = [3, 1, 2]
console.log(findMin(nums9));
