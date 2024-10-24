function findJudge(n: number, trust: number[][]): number {
    // If town has one people and not has trust relationship
    if (n === 1 && trust.length === 0) return 1;
    // Create trust score array, init score is Zero;
    const trustCount = new Array(n + 1).fill(0)
    // loop array
    for (const [a, b] of trust) {
        // if a trust other people, then less score;
        trustCount[a]--;
        // if b has trust, then plus score
        trustCount[b]++;
    }
    // Find trust score is n-1 a people
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) {
            return i;
        }
    }
    // If all people don't meeting the condition
    return -1;
};
const n20 = 2, trust = [[1, 2]]
console.log(findJudge(n20, trust));
