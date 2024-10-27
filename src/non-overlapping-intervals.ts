
function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;
    // 将所有的区间按结束位置排序
    intervals.sort((a, b) => a[1] - b[1])

    let removeCount = 0;
    let prevEnd = intervals[0][1] // 初始化为第一个区间结束的位置
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        // 当前区间和上一个区重合了
        if (start < prevEnd) {
            removeCount++;
        } else {
            prevEnd = end;
        }
    }
    return removeCount;
};

const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
console.log(eraseOverlapIntervals(intervals));
