function dailyTemperatures(temperatures: number[]): number[] {
    // 初始化数组，长度与输入数组相同，全部填充为 0；
    const res: number[] = new Array(temperatures.length).fill(0)
    // 创建一个栈，用来存储还没有找到更高温度的索引；
    const stack: number[] = [] // 用来存储索引
    // 遍历温度数组
    for (let i = 0; i < temperatures.length; i++) {
        // 如果栈里有值，并且当前温度比栈顶存储的索引对应的温度高，说明找到了更高的温度
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // 弹出栈顶的索引，计算当前索引与栈顶索引的差值，得到等待天数；
            const prevIndex: number = stack.pop() as number; // 弹出栈顶索引
            res[prevIndex] = i - prevIndex; // 计算等待天数，并更新结果数组；
        }
        // 将当前索引加入栈中，表示还没有找到更高的温度
        stack.push(i)
    }
    // 返回结果数组
    return res;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures));
