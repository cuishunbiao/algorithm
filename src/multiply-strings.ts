function multiply(num1: string, num2: string): string {
    return (BigInt(num1) * BigInt(num2)).toString()
};
const num1 = "2", num2 = "3"
console.log(multiply(num1, num2));
