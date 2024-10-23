function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image; // No change if the color is the same;

    const rows = image.length;
    const cols = image[0].length;

    // Helper function for DFS
    function dfs(r: number, c: number) {
        // Base case: If out pf bounds or the color is not the original, stop recursion
        if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor) {
            return;
        }

        // Fill the current pixel with the new color
        image[r][c] = color;

        // Explore the foure directions(up, down, left, right)
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    }

    // Start the flood fill from the given starting point;
    dfs(sr, sc);
    return image
};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2
console.log(floodFill(image, sr, sc, color))
