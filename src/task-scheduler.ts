function leastInterval(tasks: string[], n: number): number {
    const freq = new Array(26).fill(0);

    // 统计每个任务的频率
    for (const task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    // 找到最大的频率的任务数量
    const maxFreq = Math.max(...freq)

    let maxCount = 0;
    for (let f of freq) {
        if (f === maxFreq) {
            maxCount++;
        }
    }

    // 计算最短时间
    const partCount = maxFreq - 1;
    const emptySlots = partCount * (n + 1 - maxCount)
    const availableTasks = tasks.length - maxFreq * maxCount;
    const idles = Math.max(0, emptySlots - availableTasks);
    return tasks.length + idles;
};

const tasks = ["A", "A", "A", "B", "B", "B"], n31 = 2
console.log(leastInterval(tasks, n31));
