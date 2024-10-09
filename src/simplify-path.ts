function simplifyPath(path: string): string {
    const newPath = path.split('/')
    const stack: string[] = []
    for (let item of newPath) {
        if (item === '' || item === '.') {
            continue
        } else if (item === '..') {
            stack.pop()
        } else {
            stack.push(item)
        }
    }
    return '/' + stack.join('/')
};

const path = "/home//foo/"
console.log(simplifyPath(path));
