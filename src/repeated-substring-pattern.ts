
function repeatedSubstringPattern(s: string): boolean {
    const twos = s + s;
    const cache = twos.slice(1, -1)
    return cache.includes(s)
};

// function repeatedSubstringPattern(s: string): boolean {
//     const len = s.length
//     if (len < 2) return false;
//     let cache = ''
//     for (let item of s) {
//         cache = cache + item
//         const sublen = (s.length / cache.length)
//         if (sublen < 2) return false;
//         const ceilLen = Math.ceil(sublen)
//         if (cache.repeat(ceilLen) === s) {
//             return true
//         }
//     }
//     return false
// };

const txt = "abcabcabcabc"
console.log(repeatedSubstringPattern(txt));