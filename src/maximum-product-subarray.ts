
function maxProduct(nums: number[]): number {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let globalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const numsi = nums[i]
        if (numsi === 0) {
            maxProduct = 0
            minProduct = 0
        } else {
            const tempMax = maxProduct;
            maxProduct = Math.max(numsi, maxProduct * numsi, minProduct * numsi);
            minProduct = Math.min(numsi, tempMax * numsi, minProduct * numsi);
        }
        globalMax = Math.max(globalMax, maxProduct)
    }
    return globalMax
};

const nums_arr = [2, 3, -1, 4, 8]
console.log(maxProduct(nums_arr));
