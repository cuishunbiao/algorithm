class MinHeap {
    private data: [string, number][]; // 声明 data 为一个数组，元素是 [string, number]

    constructor() {
        this.data = []; // 初始化 data 为一个空数组
    }

    // 插入新元素
    push(val: [string, number]) {
        this.data.push(val); // 插入到末尾
        this.bubbleUp(this.data.length - 1); // 调整堆
    }

    // 删除堆顶元素
    pop(): [string, number] {
        if (this.size() === 1) return this.data.pop()!; // 如果只有一个元素，直接返回
        const min = this.data[0]; // 保存堆顶
        this.data[0] = this.data.pop()!; // 用最后一个元素替代堆顶
        this.bubbleDown(0); // 调整堆
        return min;
    }

    // 查看堆顶元素
    peek(): [string, number] {
        return this.data[0];
    }

    // 获取堆的大小
    size(): number {
        return this.data.length;
    }

    // 向上调整
    private bubbleUp(index: number) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (
                this.data[index][1] < this.data[parentIndex][1] ||
                (this.data[index][1] === this.data[parentIndex][1] &&
                    this.data[index][0] > this.data[parentIndex][0])
            ) {
                [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // 向下调整
    private bubbleDown(index: number) {
        const length = this.data.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < length &&
                (this.data[left][1] < this.data[smallest][1] ||
                    (this.data[left][1] === this.data[smallest][1] &&
                        this.data[left][0] > this.data[smallest][0]))
            ) {
                smallest = left;
            }

            if (
                right < length &&
                (this.data[right][1] < this.data[smallest][1] ||
                    (this.data[right][1] === this.data[smallest][1] &&
                        this.data[right][0] > this.data[smallest][0]))
            ) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}


function topKFrequent222(words: string[], k: number): string[] {
    const mapStore = new Map();
    for (let word of words) {
        mapStore.set(word, (mapStore.get(word) || 0) + 1)
    }

    // 存入最小堆
    const minHeap = new MinHeap();
    for (const [word, count] of mapStore) {
        minHeap.push([word, count]);
        if (minHeap.size() > k) {
            minHeap.pop()
        }
    }

    // 从堆中取出结果，并按要求排序
    const result = [];
    while (minHeap.size() > 0) {
        const topElement = minHeap.pop();
        const word = topElement[0]
        result.push(word)
    }
    return result.reverse()
};
const words = ["i", "love", "leetcode", "i", "love", "coding"], k112 = 2
console.log(topKFrequent222(words, k112));
