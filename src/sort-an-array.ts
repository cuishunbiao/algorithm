function sortArray(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i];
        let j = i - 1;

        // 将大于 key 的元素移动到右面
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]
            j--
        }

        // 将 key 放到正确位置
        nums[j + 1] = key;
    }
    return nums;
};

const nums222 = [5, 2, 3, 1]
console.log(sortArray(nums222));
