/**
 * let count = 1;
 * let slow = 0;
 * let fast = 0;
 * 慢指针、快指针
 * 
 * 快指针，每次都移动一个下标；
 *  判断，当前值和慢指针值，是否相等
 *      
 *      判断 count 是否大于 2；
 *          大于：nums[slow] = nums[fast]
 *          小于
 *              判断是否相等
 *                  相等，则slow+1;
 *              如果不相等
 *                  count+1;
 * 
 */
function removeDuplicates1(nums: number[]): number {
    // let count = 0;
    // let slow = 0;

    // for (let fast = 0; fast < nums.length; fast++) {
    //     debugger
    //     if (count >= 2) {
    //         nums[slow] = nums[fast];
    //     } else {
    //         if (nums[slow] === nums[fast]) {
    //             slow++;
    //         } else {
    //             count++;
    //         }
    //     }
    // }
    // return slow + 1;


    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (slow < 2) {
            // 前两个数字保留
            nums[slow] = nums[fast];
        } else if (nums[fast] !== nums[slow - 2]) {
            // 当前数字与前两个数不相等
        }
    }
    return slow;
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
