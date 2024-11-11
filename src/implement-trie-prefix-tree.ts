class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }

}
class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode()
    }

    // 插入单词到 Trie 中
    insert(word: string): void {
        let current = this.root;
        debugger
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
        console.log(`Inserted word: ${word}`)
    }

    // 查找 Trie 中的某个单词
    search(word: string): boolean {
        let current = this.root;
        debugger
        for (const char of word) {
            if (!current.children.has(char)) {
                console.log(`word not found: ${word}`)
                return false;
            }
            current = current.children.get(char)!;
        }
        console.log(`Word found: ${word}-${current.isEndOfWord}`)
        return current.isEndOfWord;
    }

    // 查找 Trie 的某个前缀
    startsWith(prefix: string): boolean {
        let current = this.root;
        debugger
        for (const char of prefix) {
            if (!current.children.has(char)) {
                console.log(`Prefix not found: ${prefix}`)
                return false;
            }
            current = current.children.get(char)!;
        }
        console.log(`Prefix found: ${prefix}`)
        return true
    }

    // 打印 Trie 的结构
    print(): void {
        const printNode = (node: TrieNode, prefix: string) => {
            if (node.isEndOfWord) {
                console.log(`Word: ${prefix}`);
            }
            for (const [char, childNode] of node.children) {
                printNode(childNode, prefix + char);
            }
        };
        printNode(this.root, "");
    }
}
// 示例测试
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 输出 true
console.log(trie.search("app"));     // 输出 false
console.log(trie.startsWith("app")); // 输出 true
trie.insert("app");
console.log(trie.search("app"));     // 输出 true