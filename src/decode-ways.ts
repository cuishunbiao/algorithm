function numDecodings(s: string): number {
    // 如果字符串为空或者以 0 开头，则无法解码；
    if (s.length === 0 || s[0] === '0') return 0

    // 初始化 dp 数组，dp[i]表示 s[0:i] 的解码方法总数
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1; // 空字符串有一种解码方式

    // 如果第一个字符不是 0，则有一种解码方法，否则无法解码
    dp[1] = s[0] !== '0' ? 1 : 0;

    // 从第二个字符开始，逐步计算 dp 数组的值
    for (let i = 2; i <= s.length; i++) {
        // 检查当个字符的解码情况，即 s[i-1]是否可以独立解码
        const singleDigit = parseInt(s[i - 1], 10); // 当前字符 s[i-1]
        if (singleDigit >= 1 && singleDigit <= 9) {
            dp[i] += dp[i - 1]
        }

        // 检查双字符的解码情况，即 s[i-2:i] 是否要可以作为有效编码
        const twoDigit = parseInt(s.substring(i - 2, i), 10); // 当前双字符 s[i-2:i]
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2]
        }
    }

    // dp[s.length] 存储的是整个字符串的解码方法总数
    return dp[s.length]
};

const s14 = "12"
console.log(numDecodings(s14));
