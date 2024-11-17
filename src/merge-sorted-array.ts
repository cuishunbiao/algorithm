/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): any {
    nums1.length = m;
    nums2.length = n;
    const result: number[] = [...nums1, ...nums2] as number[]
    const arr = result.sort((a, b) => a - b);
    nums1.splice(0, nums1.length, ...arr)
};

const nums1001 = [1, 2, 3, 0, 0, 0], m = 3, nums2002 = [2, 5, 6], n22 = 3
console.log(merge(nums1001, m, nums2002, n22));
