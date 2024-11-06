function evalRPN(tokens: string[]): number {
    const stack: number[] = []; // 存储操作数的栈

    for (let token of tokens) {
        if (isOperator(token)) {
            // 遇到操作符，从栈中取出两个数
            const b = stack.pop();
            const a = stack.pop();
            if (a !== undefined && b !== undefined) {
                stack.push(applyOperator(a, b, token))
            }
        } else {
            // 遇到数字压入栈中
            stack.push(parseInt(token, 10));
        }
    }
    return stack[0]
};

function isOperator(token: string): boolean {
    return token === "+" || token === "-" || token === "*" || token === "/";
}

function applyOperator(a: number, b: number, operator: string): number {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return Math.trunc(a / b); // 取整
        default:
            throw new Error("Invalid operator")
    }
}

const tokens = ["2", "1", "+", "3", "*"]