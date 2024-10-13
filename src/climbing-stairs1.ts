
function climbStairs1(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    const dp = new Array(n).fill(0)
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
};

const n3 = 5;
console.log(climbStairs1(n3));
