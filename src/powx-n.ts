function myPow(x: number, n: number): number {
    if (n === 0) return 1;// 0 次幂

    // 负次幂转成正次幂
    if (n < 0) {
        x = 1 / x;
        n = -n
    }

    let result = 1;
    let currentProduct = x; // 当前底数
    while (n > 0) {
        if (n % 2 === 1) {
            result *= currentProduct;
        }
        currentProduct *= currentProduct;
        n = Math.floor(n / 2)
    }

    return result
};
const x = 2.00000, n103 = 10
console.log(myPow(x, n103));
