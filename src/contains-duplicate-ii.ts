
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const currentValue = map.get(nums[i]) || []
//         currentValue.push(i)
//         if (currentValue.length > 1 && Math.abs(i - currentValue[currentValue.length - 2]) <= k) {
//             return true;
//         }
//         map.set(nums[i], currentValue)
//     }
//     return false
// };

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const prevIndex = map.get(nums[i])!;
            if (i - prevIndex <= k) {
                return true;
            }
        }
        map.set(nums[i], i)
    }
    return false
};

const nums104 = [1, 2, 3, 1, 2, 3], k104 = 2
console.log(containsNearbyDuplicate(nums104, k104));
