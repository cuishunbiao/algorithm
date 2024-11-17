function removeElement(nums: number[], val: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right]
            right--;
        } else {
            left++;
        }
    }
    return left;

    // let slow = 0;
    // for (let fast = 0; fast < nums.length; fast++) {
    //     if (nums[fast] !== val) {
    //         nums[slow] = nums[fast]
    //         slow++;
    //     }
    // }
    // return slow;
};

const nums003 = [3, 2, 2, 3], val003 = 3
console.log(removeElement(nums003, val003));
