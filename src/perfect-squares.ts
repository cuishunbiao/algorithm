function numSquares(n: number): number {
    //创建一个 dp 数组来存储到达每个数所需的最少平方数个数
    const dp = Array(n + 1).fill(Infinity)
    //0 需要的平方数个数是 0
    dp[0] = 0

    //遍历从 1 到 n 的所有整数
    for (let i = 1; i <= n; i++) {
        //对每个整数 i，尝试使用所有可能的平方数 j*j (例如 1, 4, 9, ...)
        for (let j = 1; j * j <= i; j++) {
            const resultJ = j * j;
            const result = dp[i - resultJ]
            //更新 dp[i]：dp[i - j * j] 表示减去 j*j 后的最小平方数个数，再加 1（因为使用了 j*j）
            dp[i] = Math.min(dp[i], result + 1)
        }
    }
    return dp[n]
};
const n4 = 12
console.log(numSquares(n4));
