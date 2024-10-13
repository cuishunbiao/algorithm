
function wordBreak(s: string, wordDict: string[]): boolean {
    // 初始化数组，长度为 s.length + 1
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true // 字符串可以被拆分, 空字符可以被拆分

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(s.substring(i, j))
            // 检查 s[j:i] 是否在 wordDict 中，并且 dp[j] 为 true
            if (dp[j] && wordDict.includes(s.substring(i, j))) {
                dp[i] = true;// 如果条件满足，则 dp[i] 设置为 true
                console.log(dp)
                break;
            }
        }
    }
    return dp[s.length] // 表示整个字符中否能被拆分
};

const s11 = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s11, wordDict));
