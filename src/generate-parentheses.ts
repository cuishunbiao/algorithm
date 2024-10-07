function generateParenthesis(n: number): string[] {
    const result: string[] = []
    // 回溯
    function backtrack(currentStr: string, open: number, close: number): void {
        // 如果当前字符串的长度到达了 n*2，说明形成了一个合法的括号
        if (currentStr.length === 2 * n) {
            result.push(currentStr)
            return
        }
        //尝试添加左括号
        if (open < n) {
            backtrack(currentStr + '(', open + 1, close)
        }
        // 尝试添加右括号
        if (close < open) {
            backtrack(currentStr + ')', open, close + 1)
        }
    }
    backtrack('', 0, 0)
    return result
};
const n = 3
console.log(generateParenthesis(n)) // console);
