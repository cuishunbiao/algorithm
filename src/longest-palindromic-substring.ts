// Defined result is null, if has palindromic then save in result;
// Defined CheckPalindromic use check 'str' is palindromic?
//  is true then save in result;
// Post all str in CheckPalindromic;

function longestPalindrome(s: string): string {
    if (s.length < 2) return s
    let start = 0, maxLength = 1;
    function expandAroundCenter(left: number, right: number): void {
        // 当左右指针都在有效范围内，且指向的字符相同时，继续扩展
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // 如果当前回文的长度大于之前的长度，则记录
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            // 向两边扩展
            left--;
            right++;
        }
    }
    // 遍历字符串的每个字符，将其做为回文的中心
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i)
        expandAroundCenter(i, i + 1)
    }
    return s.substring(start, start + maxLength)
};

const str = "ac"
console.log(longestPalindrome(str));