
function reverseWords1(s: string): string {
    const a = s.trim().split(' ')
    return a.filter(item => item).reverse().join(' ')
};

const s13 = "  hello    world  "
console.log(reverseWords1(s13));
