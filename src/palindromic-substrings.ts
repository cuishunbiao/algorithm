
function countSubstrings(s: string): number {
    let count = 0;
    // 辅助函数：以 left 和 right 为中心扩展，找到回文子串
    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    // 遍历每个字符，以其为中心尝试找到奇数长度的回文 
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // 奇书长度回文
        expandAroundCenter(i, i + 1); // 偶数长度回文
    }
    return count;
};

const s10 = "abc"
console.log(countSubstrings(s10));
