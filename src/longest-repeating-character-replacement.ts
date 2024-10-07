/**
 * 定义一个起始下标 j，默认为 0，当遇到一个非重复数字的时候，重新赋值它，并且把 i 的值增加 1；
 * 定义 currentChar = s[0], 当前字符
 * 定义一个 result = 1
 * 定义剩余 k 的值；
 * 
 */
function characterReplacement(s: string, k: number): number {
    // 创建一个大小为26的数组，用于记录窗口内每个字符的频率
    const charCount: number[] = new Array(26).fill(0)
    let left = 0; // 窗口左边界初始化为 0
    let maxFreq = 0; // 当前窗口内最多字符的频率
    let maxLength = 0; // 初始化最长子串的长度

    // 遍历字符串中的每个字符，right 表示窗口的右边界
    for (let right = 0; right < s.length; right++) {
        // 计算当前字符索引（基于 ASCII 码偏移 A的值）
        const charIndex = s.charCodeAt(right) - 'A'.charCodeAt(0)
        charCount[charIndex]++; // 将当前字符的频率加 1

        // 更新当前窗口内最多字符的频率
        maxFreq = Math.max(maxFreq, charCount[charIndex]);

        // 判断当前窗口是否需要收缩：窗口长度 - 最多字符频率 > k 时需要收缩
        if (right - left + 1 - maxFreq > k) {
            // 计算左边界字符索引
            const leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0)
            // 将左边界字符减 1
            charCount[leftCharIndex]--;
            left++;
        }

        // 更新最大子串长度为窗口的长度
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

const s1 = "ABAB", k = 2
console.log(characterReplacement(s1, k));
