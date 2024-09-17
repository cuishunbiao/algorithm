function lengthOfLongestSubstring(s: string): number {
    let map = new Map();
    let maxLen = 0;
    let start = 0; // 滑动窗口起始位置

    for (let end = 0; end < s.length; end++) {
        const char = s[end]
        // 如果当前字符已经存在于 map 中，且它的位置在 start 之后；
        if (map.has(char) && map.get(char) >= start) {
            // 更新 start，跳过重复字符
            start = map.get(char) + 1;
        }
        // 更新或添加当前字符位置
        map.set(char, end)
        // 更新最长长度
        maxLen = Math.max(maxLen, end - start + 1)
    }
    return maxLen
};
const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
