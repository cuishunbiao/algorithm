class TrieNode1 {
    children: { [key: string]: TrieNode1 };
    isEndOfword: boolean;

    constructor() {
        this.children = {};
        this.isEndOfword = false;
    }
}
class WordDictionary {
    root: TrieNode1;
    constructor() {
        this.root = new TrieNode1()
    }

    addWord(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode1();
            }
            node = node.children[char];
        }
        node.isEndOfword = true;
    }

    search(word: string): boolean {
        const dfs = (node: TrieNode1, i: number): boolean => {
            if (i === word.length) {
                return node.isEndOfword
            }
            if (word[i] === '.') {
                for (const child of Object.values(node.children)) {
                    if (dfs(child, i + 1)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.children[word[i]]) {
                    return false;
                }
                return dfs(node.children[word[i]], i + 1)
            }
        }
        return dfs(this.root, 0)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */