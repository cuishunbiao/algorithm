function findPeakElement(nums: number[]): number {
    let left = 0, right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare mid element with its right neighbor
        if (nums[mid] > nums[mid + 1]) {
            //If nums[mid] is greater, peak is in the left helf (or mid could be a peak)
            right = mid;
        } else {
            // If nums[mid] is smallter, peak is in the right half
            left = mid + 1;
        }
    }

    // After the loop, left === right, which is the peak index
    return left
};
const nums7 = [1, 2, 3, 1]
console.log(findPeakElement(nums7));
