
function backspaceCompare(s: string, t: string): boolean {
    function fillterPatten(str: string) {
        let result = []
        for (let item of str) {
            if (item === '#') {
                result.pop()
            } else {
                result.push(item)
            }
        }
        return result.join('')
    }
    let sResult = fillterPatten(s)
    let tResult = fillterPatten(t)
    return sResult === tResult
};

const str1 = "ab#c", str2 = "ad#c"
console.log(backspaceCompare(str1, str2))

// function backspaceCompare(s: string, t: string): boolean {
//     let sResult = ''
//     for (let item of s) {
//         if (item === '#') {
//             sResult = sResult.substring(0, sResult.length - 1)
//         } else {
//             sResult += item;
//         }
//     }
//     let tResult = ''
//     for (let item of t) {
//         if (item === '#') {
//             tResult = tResult.substring(0, tResult.length - 1)
//         } else {
//             tResult += item;
//         }
//     }
//     return sResult === tResult
// };