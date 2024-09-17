function findMaxConsecutiveOnes(nums: number[]): number {
    let result = 0
    let cacheNum = 0
    for (let num of nums) {
        if (num === 1) {
            cacheNum++
        } else {
            result = Math.max(result, cacheNum)
            cacheNum = 0
        }
    }
    return Math.max(result, cacheNum);
};

const nums = [1, 0, 1, 1, 0, 1]
console.log(findMaxConsecutiveOnes(nums));
