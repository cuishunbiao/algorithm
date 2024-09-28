function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    let closestSum = nums[0] + nums[1] + nums[2]; // 初始化最接近的和为前三个数的和

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // 判断当前 sum 是否更接受 target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            // 根据当前 sum 与 target 的比较，移动 
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum
            }
        }
    };
    return closestSum
}
const nums10 = [-1, 2, 1, -4], target10 = 1
console.log(threeSumClosest(nums10, target10));
