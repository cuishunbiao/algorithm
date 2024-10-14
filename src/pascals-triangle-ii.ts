
function getRow(rowIndex: number): number[] {

    const arr = [[1]]
    for (let i = 1; i < rowIndex; i++) {
        arr.push(new Array(i + 1).fill(1))
    }
    debugger
    console.log(arr);

    return []
};

const rowIndex = 3
console.log(getRow(rowIndex));

