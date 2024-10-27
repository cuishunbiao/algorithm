
function partitionLabels(s: string): number[] {
    const lastPosition: any = {}
    const result = []
    // 记录每个字符出现的最后位置
    for (let i = 0; i < s.length; i++) {
        lastPosition[s[i]] = i
    }

    let start = 0, end = 0;
    // 划分片段
    for (let i = 0; i < s.length; i++) {
        // 更新当前片段的结束位置
        end = Math.max(end, lastPosition[s[i]])
        // 如果当前位置到了当前片段的结束位置
        if (i === end) {
            result.push(end - start + 1)
            start = i + 1
        }
    }
    return result
};

const s23 = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s23));
