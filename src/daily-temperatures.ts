function dailyTemperatures(temperatures: number[]): number[] {

    const n = temperatures.length;
    const answer = new Array(n).fill(0);

    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        // 当前温度比栈顶高的时候，处理栈顶元素
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            if (prevIndex !== undefined) {
                answer[prevIndex] = i - prevIndex
            }
        }
        stack.push(i)
    }
    return answer
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures));
