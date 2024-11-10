function nextGreaterElements(nums: number[]): number[] {
    // 初始化数组，长度与输入数组相同，全部填充为 -1，表示初始情况下没找到更大的元素；
    const res: number[] = new Array(nums.length).fill(-1)
    // 创建栈
    const stack: number[] = []
    const n = nums.length;
    // 遍历两次，模拟循环数组效果
    for (let i = 0; i < 2 * n; i++) {
        const index = i % n;
        // 当栈不为空时，且当前元素大于栈顶索引对应的元素时
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
            const prevIndex = stack.pop() as number;
            res[prevIndex] = nums[index]// 更新数组结果，找到下一个更大的数
        }
        // 只将索引加入栈中一次，在第一次遍历时加入
        if (i < n) {
            stack.push(i)
        }
    }
    return res;
};
const nums121 = [1, 2, 1]
console.log(nextGreaterElements(nums));
