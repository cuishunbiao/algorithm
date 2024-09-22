function fourSum(nums: number[], target: number): number[][] {
    const result = [];
    nums.sort((a, b) => a - b)

    console.log(nums);
    for (let a = 0; a < nums.length - 3; a++) {
        // 跳过重复的第一个数
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < nums.length - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            let left = b + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[a] + nums[b] + nums[left] + nums[right]
                if (sum === target) {
                    result.push([nums[a], nums[b], nums[left], nums[right]])
                    // 跳过重复的左指针元素
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // 跳过重复的右指针元素
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right++;
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }

        }
    }
    return result
};
const nums5 = [1, 0, -1, 0, -2, 2], target = 0
console.log(fourSum(nums5, target));
