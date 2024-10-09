function minRemoveToMakeValid(s: string): string {
    const len = s.length
    const stack: number[] = []
    const invalidIndices = new Set<Number>()

    // 第一次遍历，标记无效括号位置
    for (let i = 0; i < len; i++) {
        const char = s[i]
        if (char === '(') {
            stack.push(i)
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop()
            } else {
                invalidIndices.add(i);// 右括号多余，标记为无效位置
            }
        }
    }

    // 如果 stack 里还有值，说明都是不匹配的，也就是没有 pop 匹配出去；
    for (const index of stack) {
        invalidIndices.add(index)
    }

    // 如果在无效数组下标中找不到元素，则标记为有效字符，加到 re sult 上
    let result = ''
    for (let i = 0; i < len; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i]
        }
    }

    return result
};
const s12 = "lee(t(c)o)de)"
console.log(minRemoveToMakeValid(s12))
