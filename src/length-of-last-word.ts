function lengthOfLastWord(s: string): number {
    if (!s.length) return 0;
    const newS = s.trim().split(' ')
    return newS[newS.length - 1].length
};
const s103 = "Today is a nice day"
console.log(lengthOfLastWord(s103))