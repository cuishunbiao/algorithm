
function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let item of map.keys()) {
        const num = map.get(item) as number;
        if (num < 3) {
            return item
        }
    };
    return -1
}

const nums24 = [0, 1, 0, 1, 0, 1, 99]
console.log(singleNumber(nums24));
