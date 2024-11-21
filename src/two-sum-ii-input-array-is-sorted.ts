function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [++left, ++right]
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return []
};
const numbers = [2, 7, 11, 15], target102 = 9
console.log(twoSum(numbers, target102));
