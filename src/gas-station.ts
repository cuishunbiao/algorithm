
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0; // 总加油量
    let totalCost = 0; // 总油耗量
    let tank = 0; // 当前油箱状态
    let start = 0; //起点

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
        tank += gas[i] - cost[i]

        // 如果油量不足到达下一站
        if (tank < 0) {
            start = i + 1; // 起点调到下一站
            tank = 0; // 重置油箱
        }
    }

    return totalGas >= totalCost ? start : -1;
};

const gas = [1, 2, 3, 4, 5], cost103 = [3, 4, 5, 1, 2]


console.log(canCompleteCircuit(gas, cost103));
