
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('')
        console.log(sortedStr)
        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(str)
        } else {
            map.set(sortedStr, [str])
        }
    }
    return Array.from(map.values()) // 返回所有的字母异位词分组
};

const strs12 = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs12));
