// if the key exist, push in Stack


function isValid(s: string): boolean {
    const model: any = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    const stack: string[] = []
    // If has current key, then pop of array, both different return false
    for (let item of s) {
        if (item in model) {
            if (model.hasOwnProperty(item)) {
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
