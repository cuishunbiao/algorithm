function numIslands(grid: string[][]): number {
    const dfs = (i: number, j: number) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        dfs(i - 1, j); // UP
        dfs(i + 1, j); // Down
        dfs(i, j - 1); // Left
        dfs(i, j + 1); // Right
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            console.log('cell', grid[i][j])
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count
};

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
console.log(numIslands(grid));
