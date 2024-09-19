function canJump(nums: number[]): boolean {
    const arrLen = nums.length - 1
    let cacheStep = 0;
    // 当前「下标」加上「当前值」，是不是大于等于「数组长度 - 1」
    for (let i = 0; i < nums.length; i++) {
        if (i > cacheStep) return false;
        cacheStep = Math.max(cacheStep, i + nums[i])
    }
    return cacheStep >= arrLen;
};

const numsArr = [2, 2, 1, 0, 1]
// [1, 0, 1, 0]
// [2,3,1,1,4]
console.log(canJump(numsArr));
