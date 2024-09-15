// if the key exist, push in Stack


function isValid(s: string): boolean {
    const model: { [key: string]: string } = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    const stack: string[] = []
    // If has current key, then pop of array, both different return false
    for (let item of s) {
        if (model[item]) {
            if (model[item] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(item)
        }
    }
    return !stack.length
};

const string = "()[]{}"
console.log(isValid(string));
