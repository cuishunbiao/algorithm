
function subsets(nums: number[]): number[][] {
    const result: number[][] = []

    function backtrack(start: number, current: number[]) {
        // 将当前子集加入到结果中
        result.push([...current])
        // 遍历剩余元素，尝试加入子集
        for (let i = start; i < nums.length; i++) {
            // 选择当前元素
            current.push(nums[i]);
            // 递归调用，处理下一个元素
            backtrack(i + 1, current);
            current.pop()
        }
    }

    backtrack(0, []) // 从第一个元素开始
    return result
};

const num24 = [1, 2, 3]
console.log(subsets(num24));
