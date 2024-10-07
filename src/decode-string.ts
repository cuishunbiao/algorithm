
function decodeString(s: string): string {
    const numStack: number[] = [] // 存储数字 K
    const strStack: string[] = [] // 存储字符串
    let currentStr: string = '' // 当前构建的字符串
    let k: number = 0 // 当前数字
    for (let char of s) {
        // 如果是数字
        if (!isNaN(Number(char))) {
            k = k * 10 + Number(char)
        } else if (char === '[') {
            numStack.push(k); // 将当前 k 入栈
            strStack.push(currentStr)
            currentStr = ''
            k = 0
        } else if (char === ']') {
            const repeatTimers = numStack.pop() as number // 取出 k
            const lastStr = strStack.pop() as string // 取出对应的字符串
            currentStr = lastStr + currentStr.repeat(repeatTimers) // 重复当前字符
        } else {
            currentStr += char
        }
    }
    return currentStr
};

const sss = "3[a]2[bc]"
console.log(decodeString(sss));
