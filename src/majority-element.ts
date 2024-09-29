
function majorityElement(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    nums.sort((a, b) => a - b)
    const len = Math.floor((nums.length - 1) / 2)
    return nums[len]
};

const num11 = [2, 2]
console.log(majorityElement(num11));
