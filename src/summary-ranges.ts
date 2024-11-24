// function summaryRanges(nums: number[]): string[] {
//     const len = nums.length;
//     if (!len) return []
//     if (len === 1) return [nums[0].toString()]

//     const arr: number[][] = []
//     for (let i = 0, j = 0; i < nums.length; j++) {
//         if (nums[j] + 1 !== nums[j + 1]) {
//             arr.push([nums[i], nums[j]])
//             i = j + 1
//         }
//     }

//     const result: string[] = []
//     arr.forEach(item => {
//         if (item[0] === item[1]) {
//             result.push(item[0].toString())
//         } else {
//             result.push(item.join('->'))
//         }
//     })

//     return result
// };

// const nums106 = [0, 1, 2, 4, 5, 7]
// console.log(summaryRanges(nums106));

function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                result.push(nums[start].toString())
            } else {
                result.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }

    return result;
};

const nums106 = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(nums106));
