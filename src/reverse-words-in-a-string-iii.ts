function reverseWords(s: string): string {
    const cache = s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    return cache
};

const strings = "Mr Ding"
console.log(reverseWords(strings));
