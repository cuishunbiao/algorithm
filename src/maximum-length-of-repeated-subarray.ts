
function findLength(nums1: number[], nums2: number[]): number {
    let maxLen = 0
    // create dp arrar
    const dp = Array.from({
        length: nums1.length
    }, () => new Array(nums2.length).fill(0))

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1 // 边界情况，直接设置为 1
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1; //状态转移
                }
                maxLen = Math.max(maxLen, dp[i][j])// 更新最大长度
            } else {
                dp[i][j] === 0
            }
        }
    }
    return maxLen
};

const nums1 = [1, 2, 3, 2, 8], nums2 = [5, 6, 1, 4, 7]
console.log(findLength(nums1, nums2));
