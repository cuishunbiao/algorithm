// 单调栈 + 哈希表
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    //使用哈希表来存储 nums 中每个元素的下一个更大元素
    const nextGreaterMap: Map<number, number> = new Map();
    // 使用栈来辅助查找下一个更大元素
    const stack: number[] = [];

    // 遍历数组 num2
    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            // 弹出栈顶元素，并将其下一个更大的元素存入哈希表
            const smallerNum = stack.pop() as number;
            nextGreaterMap.set(smallerNum, num)
        }
        stack.push(num)
    }
    console.log(stack);


    // 遍历数组 nums1，构造结果
    const result: number[] = nums1.map(num => nextGreaterMap.get(num) ?? -1);
    return result
};
const nums111 = [4, 1, 2], nums2222 = [1, 3, 4, 2]
console.log(nextGreaterElement(nums111, nums2222));
