// 检查当前载重量是否能在D天内运完所有包裹
const canShipWithinDays = (weights: number[], D: number, capacity: number) => {
    let days = 1; // 初始至少需要一天
    let currentLoad = 0; // 当前这一天已经装载的重量

    for (let weight of weights) {
        // 如果当前包裹加上现有重量超出了船的载重量，开始新的一天
        if (currentLoad + weight > capacity) {
            days += 1; // 增加一天
            currentLoad = 0; // 重新开始新的一天装货
        }
        currentLoad += weight;
    }

    // 判断所需的天数是否小于等于D
    return days <= D;
};

// 使用二分查找找到最小的船载重量
const shipWithinDays = (weights: number[], D: number) => {
    // 船载重量的范围：最小是最大包裹的重量，最大是所有包裹的总重量
    let left = Math.max(...weights); // 船的最小载重量是最重的包裹
    let right = weights.reduce((a, b) => a + b, 0); // 船的最大载重量是所有包裹重量之和

    while (left < right) {
        let mid = Math.floor((left + right) / 2); // 当前载重量的中间值
        if (canShipWithinDays(weights, D, mid)) {
            right = mid; // 如果可以在D天内运输完，尝试更小的载重量
        } else {
            left = mid + 1; // 如果不行，增大载重量
        }
    }

    return left; // 返回满足条件的最小载重量
};
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5
console.log(shipWithinDays(weights, days));
