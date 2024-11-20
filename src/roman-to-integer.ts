function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let total: number = 0;
    let prevValue: number = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue: number = romanMap[s[i]];//当前符号值
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
};

const s101 = "III"
console.log(romanToInt(s101));

