function jump(nums: number[]): number {
    let jump = 0; // jump a few step
    let current_end = 0; // current jump position end
    let end_index = 0; // farthest jump position

    // Each jump farthest from the current position
    for (let i = 0; i < nums.length - 1; i++) {
        // farthest jump position
        end_index = Math.max(end_index, nums[i] + i);
        // if current jump position end, then jump++
        if (i === current_end) {
            jump++;
            // reset jump position end
            current_end = end_index
        }
    }
    return jump;
};

const numsArray = [2, 3, 1, 1, 4]
console.log(jump(numsArray));
