function maxSubArray(nums: number[]): number {
    let maximum = -Infinity;
    let sum = 0;
    for (let num of nums) {
        sum = Math.max(num, sum + num)
        maximum = Math.max(sum, maximum)
    }
    return maximum;
};
const nums8 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums8));
