function climbStairs(n: number): number {
    if (n === 1) return 1;

    let prev1 = 1, prev2 = 2;
    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2
        prev1 = prev2
        prev2 = current
    }
    return prev2
};
const n1 = 10
console.log(climbStairs(n1));
