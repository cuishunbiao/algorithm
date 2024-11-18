function removeDuplicates1(nums: number[]): number {
    let slow = 0;
    let count = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] === nums[slow]) {
            count++;

        }
        // if (nums[fast] !== nums[slow]) {
        //     count++;
        // if (count === 2) {
        //     slow++
        //     nums[slow] = nums[fast];
        // }
        // } else {
        //     count = 1;
        // }
    }

    console.log(nums);

    return slow + 1;

};

const nums0003 = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates1(nums0003));


// function removeDuplicates1(nums: any): any {
//     // if (nums.length === 0) return 0;
//     // let slow = 0;
//     // for (let fast = 1; fast < nums.length; fast++) {
//     //     if (nums[slow] !== nums[fast]) {
//     //         slow++;
//     //         nums[slow] = nums[fast]
//     //     }
//     // }
//     // return slow + 1;

//     const len = nums.length;
//     const newNums = [...new Set(nums)]
//     nums.splice(0, len, ...newNums);
//     return newNums.length
// };
// const nums0003 = [1, 1, 2]
// console.log(removeDuplicates1(nums0003));
