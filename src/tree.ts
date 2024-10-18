class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function createBinaryTreeFromArray(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]!);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (current === null || current === undefined) continue;
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]!);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]!);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}

// function maxDepth(root: TreeNode | null): number {
//     if (root === null) return 0
//     const leftDepth = maxDepth(root.left);
//     const rightDepth = maxDepth(root.right);

//     return Math.max(leftDepth, rightDepth) + 1
// };

// ------------------------------------------------------------------------------------------------

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (p === null && q === null) return true;
//     if (p === null || q === null) return false;
//     if (p.val !== q.val) return false;

//     const isLeftSame = isSameTree(p.left, q.left);
//     const isRightSame = isSameTree(p.right, q.right);

//     return isLeftSame && isRightSame
// };

// const p = createBinaryTreeFromArray([1, 2, 3]), q = createBinaryTreeFromArray([1, 2, 3])
// console.log(isSameTree(p, q));

// ------------------------------------------------------------------------------------------------

// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (root === null) return null;

//     [root.left, root.right] = [root.right, root.left]
//     invertTree(root.left)
//     invertTree(root.right)
//     return root
// };
// const root = createBinaryTreeFromArray([4, 2, 7, 1, 3, 6, 9])
// console.log(root)

// ------------------------------------------------------------------------------------------------

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    if (root === null) return result;

    function dfs(node: TreeNode | null, path: string) {
        if (!node) return;

        // 将当前节点的值加入路径
        path += node.val;

        // 判断是否是叶子节点
        if (!node.left && !node.right) {
            result.push(path)
        } else {
            // 不是叶子，则递归处理左右子树
            if (node.left) dfs(node.left, path + '->')
            if (node.right) dfs(node.right, path + '->')
        }
    }

    dfs(root, '')
    return result
};

const root = createBinaryTreeFromArray([1, 2, 3, null, 5])
console.log(binaryTreePaths(root))

