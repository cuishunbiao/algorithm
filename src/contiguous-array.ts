function findMaxLength(nums: number[]): number {
    // 创建一个 Map 来累加和 sum 首次出现的索引
    const sumIndices = new Map();
    sumIndices.set(0, -1); // 初始化 sum 为 0 时的索引为 -1
    let maxLength = 0; // 用来记录最长子数组的长度
    let sum = 0; // 累加和

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            sum += 1
        } else {
            sum -= 1;
        }
        // 检查当前的累加和是否已经存在于 Map 中
        if (sumIndices.has(sum)) {
            // 如果存在，则计算子数组长度
            const prevIndex = sumIndices.get(sum);
            const length = i - prevIndex;
            maxLength = Math.max(maxLength, length)
        } else {
            sumIndices.set(sum, i)
        }
    }

    return maxLength
};

// const nums4 = [0, 1, 0, 1, 1, 0]
const nums4 = [0, 0, 0, 1, 1, 1, 0]

console.log(findMaxLength(nums4));
