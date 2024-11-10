function calPoints(operations: string[]): number {
    //使用栈来存储每一轮得分
    const stack: number[] = []
    for (const op of operations) {
        if (op === 'C') {
            // 移除上一次得分
            stack.pop();
        } else if (op === 'D') {
            // 将上次得分翻倍
            stack.push(stack[stack.length - 1] * 2)
        } else if (op === '+') {
            // 前两次得分相加
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else {
            // 将当前数字放到栈里
            stack.push(parseInt(op))
        }
    }

    return stack.reduce((sum, score) => sum + score, 0)
};

const ops = ["5", "2", "C", "D", "+"]
console.log(calPoints(ops));
