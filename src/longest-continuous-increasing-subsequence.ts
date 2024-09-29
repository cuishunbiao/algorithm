
function findLengthOfLCIS(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let result = 1
    let numLen = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            result = Math.max(++numLen, result)
        } else {
            numLen = 1
        }
    };
    return result;
}

const nums12 = [1, 3, 5, 7]
console.log(findLengthOfLCIS(nums12));
