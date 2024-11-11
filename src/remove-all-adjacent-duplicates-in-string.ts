function removeDuplicates(s: string): string {
    const stack: string[] = []
    for (const i of s) {
        if (stack.length > 0 && i === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(i)
        }
    }
    return stack.join('')
};

const s131 = "abbaca"
console.log(removeDuplicates(s131));