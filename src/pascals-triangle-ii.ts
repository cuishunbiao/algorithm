
function getRow(rowIndex: number): number[] {
    const row = [1]; // 初始化第 0 行
    for (let i = 1; i <= rowIndex; i++) {
        row.push(1); //每行末尾增加 1
        // 从后向前更新当前行，以便直接使用前面的值
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    return row;
};

const rowIndex = 3
console.log(getRow(rowIndex));

