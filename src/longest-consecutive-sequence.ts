
function longestConsecutive(nums: number[]): number {
    if (!nums.length) return 0
    let result = 1
    let maxLen = 1
    const numsSet = Array.from(new Set(nums.sort((a, b) => a - b)))
    for (let i = 1; i < numsSet.length; i++) {
        if (numsSet[i] - numsSet[i - 1] === 1) {
            maxLen = Math.max(maxLen, ++result)
        } else {
            result = 1
        }
    }
    return maxLen;
};

const nums3 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(nums3));
