function sortArray(nums: number[]): number[] {
    return nums.sort((a, b) => a - b)
};

const nums222 = [5, 2, 3, 1]
console.log(sortArray(nums222));
