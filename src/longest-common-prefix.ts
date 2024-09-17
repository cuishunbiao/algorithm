
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    // 取最小长度的字符
    let result = strs[0]
    const matchFn = (val: string, arr: string) => {
        let res = ''
        for (let index = 0; index < arr.length; index++) {
            if (val[index] !== arr[index]) return res
            res += val[index]
        }
        return res;
    }
    for (let i = 1; i < strs.length; i++) {
        const cacheRes = matchFn(result, strs[i])
        if (cacheRes.length < result.length) {
            result = cacheRes
        }
    }
    return result || ''
};

const strs = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs));
