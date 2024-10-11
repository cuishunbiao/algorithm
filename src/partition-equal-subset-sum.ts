function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const dp = new Array(target + 1).fill(false)
    dp[0] = true;

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num]
        }
    }

    return dp[target]
};
const nums15 = [1, 5, 11, 5]
console.log(canPartition(nums15));
