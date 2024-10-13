
function findLengthOfLCIS1(nums: number[]): number {
    let maxLen = 0
    let currentLen = 1
    for (let i = 0; i < nums.length; i++) {
        const nextNumber = nums[i + 1]
        if (nextNumber > nums[i]) {
            currentLen++
            maxLen = Math.max(maxLen, currentLen)
        } else {
            currentLen = 1
        }
    }
    return maxLen
};

const nums16 = [1, 3, 5, 4, 7]
console.log(findLengthOfLCIS1(nums16));
