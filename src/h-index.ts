
function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    const len = citations.length
    for (let i = 0; i < len; i++) {
        if (citations[i] < i + 1) {
            return i
        }
    }
    return len
};

const citations = [100]
console.log(hIndex(citations));

