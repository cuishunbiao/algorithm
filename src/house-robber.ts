
function rob(nums: number[]): number {
    const len = nums.length;
    let money = 0; // 当前最大金额
    let prev1 = 0; // 上一家店的总金额
    let prev2 = 0; // 上上家店的总金额

    for (let i = 0; i < len; i++) {
        const newMoney = prev2 + nums[i]
        money = Math.max(prev1, newMoney)
        prev2 = prev1;
        prev1 = money
    }

    return money;
};

const nums13 = [1, 2, 3, 1]
console.log(rob(nums13));



// function rob(nums: number[]): number {
//     const len = nums.length;
//     // 如果没有房子，返回 0，因为没有钱可偷
//     if (len === 0) return 0;
//     // 如果只有一个房子，返回该房子的金额
//     if (len === 1) return nums[0];
//     // 初始化 dp 数组，每个元素表示到当前房子为止所能偷到的最大金额
//     const dp = new Array(len)

//     // 第一个房子是最大金额
//     dp[0] = nums[0]
//     // 对于第二个房子，能偷到的金额是是前两个房子的最大金额；
//     dp[1] = Math.max(nums[0], nums[1])

//     // 从第三个房子开始遍历
//     for (let i = 2; i < len; i++) {
//         // 当前房子的最大金额就是：不偷当前房子或者偷当前房子，两者的最大值；
//         const steal = dp[i - 1]
//         const notSteal = dp[i - 2] + nums[i]
//         dp[i] = Math.max(steal, notSteal)
//     }
//     return dp[len - 1]
// };

// const nums13 = [1, 2, 3, 1]
// console.log(rob(nums13));
