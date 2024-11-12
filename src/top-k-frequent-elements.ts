
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>()
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    // 使用最小堆
    const minHeap: [number, number][] = []
    for (const [num, frequency] of frequencyMap) {
        if (minHeap.length < k) {
            // 如果堆小于 k，直接加入堆
            minHeap.push([num, frequency]);
            minHeap.sort((a, b) => a[1] - b[1]) // 按频率排序，最小的在前面
        } else if (frequency > minHeap[0][1]) {
            // 如果当前频率大于堆顶，替换堆面
            minHeap.shift();
            minHeap.push([num, frequency])
            minHeap.sort((a, b) => a[1] - b[1])
        }
    }
    return minHeap.map(([num]) => num)
};

const nums001 = [1, 1, 1, 2, 2, 3], k001 = 2
console.log(topKFrequent(nums001, k001));
