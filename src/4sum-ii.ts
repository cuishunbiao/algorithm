
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map()
    let count = 0;
    // 四个数组，拆成两个
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const cacheSum = nums1[i] + nums2[j]
            map.set(cacheSum, (map.get(cacheSum) || 0) + 1)
        }
    }

    for (let k = 0; k < nums3.length; k++) {
        for (let l = 0; l < nums4.length; l++) {
            const cacheSum = -(nums3[k] + nums4[l])
            if (map.has(cacheSum)) {
                count += map.get(cacheSum);
            }
        }
    }

    return count
};

const nums11 = [1, 2], nums22 = [-2, -1], nums33 = [-1, 2], nums44 = [0, 2]
console.log(fourSumCount(nums11, nums22, nums33, nums44));
