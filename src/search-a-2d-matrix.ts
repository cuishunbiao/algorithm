
function searchMatrix(matrix: number[][], target: number): Boolean {
    let left = 0, right = matrix.length - 1, subLen = matrix[0].length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (matrix[middle][0] <= target && target <= matrix[middle][subLen]) {
            return findNumber(matrix[middle])
        }
        if (matrix[middle][0] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    function findNumber(nums: number[]): Boolean {
        const len = nums.length
        let left = 0, right = len - 1;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (target === nums[middle]) {
                return true
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return false;
    }
    return false;
};

const matrix = [[1]], target1 = 1
console.log(searchMatrix(matrix, target1));
