// Defined new map, loop s in the map
// if has item, then add item value;
// otherwise add item value = 1;
// 
function isAnagram(s: string, t: string): boolean {
    const sObj: { [key: string]: number } = {}
    // Find item in the s and save in map
    for (let item of s) {
        if (sObj[item]) {
            sObj[item] = ++sObj[item]
        } else {
            sObj[item] = 1
        }
    }
    for (let tItem of t) {
        if (!sObj[tItem]) return false
        sObj[tItem] = --sObj[tItem]
    }

    for (let a of Object.keys(sObj)) {
        if (sObj[a] !== 0) return false
    }

    return true
};

const string1 = "rat", t = "car"
console.log(isAnagram(string1, t));
