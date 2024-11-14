class KthLargest {
    private minHeap: number[];
    private k: number;
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.minHeap = []
        // 初始化最小堆
        for (const num of nums) {
            this.add(num)
        }
    }

    add(val: number): number {
        // 插入
        this.minHeap.push(val);

        // 维持最小堆性质
        this.minHeap.sort((a, b) => a - b)

        // 如果堆的长度大于 k ，则移除堆顶元素
        if (this.minHeap.length > this.k) {
            this.minHeap.shift() // 删除最小元素
        }

        return this.minHeap[0]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */