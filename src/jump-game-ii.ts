function jump(nums: number[]): number {
    let n = nums.length;
    if (n === 1) return 0; // If there's only one element, no jump is needed.

    let jumps = 0; // Number of jumps made
    let current_end = 0; // End of the range you can reach with the current jump
    let farthest = 0; // The farthest point you can reach from the current position

    for (let i = 0; i < n - 1; i++) {
        // Update the farthest point you can reach
        farthest = Math.max(farthest, i + nums[i]);

        // If you've reached the end of the current jump range, make a jump
        if (i === current_end) {
            jumps++;
            current_end = farthest; // Update the end to the farthest you can reach

            // If the current_end reaches or surpasses the last index, break out of the loop
            if (current_end >= n - 1) {
                break;
            }
        }
    }

    return jumps;
};

const numsArray = [2, 3, 1, 1, 4]
console.log(jump(numsArray));
