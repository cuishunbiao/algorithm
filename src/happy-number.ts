function isHappy(n: number): boolean {
    const seen = new Set<number>()

    while (n != 1) {
        let sum = 0;

        // 计算平方和
        while (n > 0) {
            const digit = n % 10; // 提取个位数字
            sum += digit * digit;
            n = Math.floor(n / 10); // 去掉个拉
        }

        if (seen.has(sum)) {
            return false
        }

        seen.add(sum)
        n = sum;
    }
    return true;
};

const n104 = 19
console.log(isHappy(n104));
