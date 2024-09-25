function searchMatrix(matrix: number[][], target: number): boolean {
    /**
     * 先确定行：大于每行第 1 个，并且小于下一行第 1 个，可以取出行。
     * 拿到这一行，做二分查找
     */

    // 先确定是哪行
    for (let i = 0; i < matrix.length; i++) {
        debugger
        if (matrix[i][0] <= target && target < matrix[i + 1][0]) {
            findNumber(matrix[i])
            break
        }
    }

    function findNumber(nums: number[]): boolean {
        const len = nums.length
        let left = 0, right = len - 1, middle = Math.floor((left + right) / 2);

        while (left <= right) {
            if (target < nums[middle]) {
                right = middle
            } else {
                left = middle
            }
        }

        return false;
    }

    return true
};

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target1 = 3
console.log(searchMatrix(matrix, target1));
