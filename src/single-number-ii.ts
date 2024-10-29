
function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, (map.get(num) || 1) + 1);
        } else {
            map.set(num, 1);
        }
    }
    for (let item of map.keys()) {
        if (map.has(item) && map.get(item) < 3) {
        }
    };

    const nums24 = [2, 2, 3, 2]
    console.log(singleNumber(nums24));

