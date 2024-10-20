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

// function binaryTreePaths(root: TreeNode | null): string[] {
//     const result: string[] = [];
//     if (root === null) return result;

//     function dfs(node: TreeNode | null, path: string) {
//         if (!node) return;

//         // 将当前节点的值加入路径
//         path += node.val;

//         // 判断是否是叶子节点
//         if (!node.left && !node.right) {
//             result.push(path)
//         } else {
//             // 不是叶子，则递归处理左右子树
//             if (node.left) dfs(node.left, path + '->')
//             if (node.right) dfs(node.right, path + '->')
//         }
//     }

//     dfs(root, '')
//     return result
// };

// const root = createBinaryTreeFromArray([1, 2, 3, null, 5])
// console.log(binaryTreePaths(root))


// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//     if (root === null || root.val === val) {
//         return root;
//     }
//     if (val < root.val) {
//         return searchBST(root.left, val)
//     } else {
//         return searchBST(root.right, val)
//     }
// };

// const root = createBinaryTreeFromArray([4, 2, 7, 1, 3]), val1 = 2
// console.log(searchBST(root, val1));


// ------------------------------------------------------------------------------------------------

// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//     if (root === null) return false;

//     // check if the current node is a leaf node and targetsum is equal to ite value;
//     if (root.left === null && root.right === null && targetSum === root.val) {
//         return true;
//     }

//     // recursively check the left and right subtrees widh the updated targetsum;
//     const remainingSum = targetSum - root.val;
//     return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
// };

// const root = createBinaryTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), targetSum = 22
// console.log(hasPathSum(root, targetSum));

// ------------------------------------------------------------------------------------------------

// function isSymmetric(root: TreeNode | null): boolean {
//     if (root === null) return true;

//     function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
//         if (left === null && right === null) return true;
//         if (left === null || right === null) return false;
//         if (left.val !== right.val) return false;

//         //Recursively check:
//         // 1. left subtree's left with right tree subtree's right;
//         // 2. left subtree's right with right tree subtree's left;
//         return isMirror(left.left, right.right) && isMirror(left.right, right.left)
//     }
//     return isMirror(root.left, root.right)
// };

// const root = createBinaryTreeFromArray([1, 2, 2, 3, 4, 4, 3])
// console.log(isSymmetric(root));

// ------------------------------------------------------------------------------------------------

// function levelOrder(root: TreeNode | null): number[][] {
//     if (root === null) return []
//     const result: number[][] = []

//     const queue: (TreeNode | null)[] = [root]

//     while (queue.length > 0) {
//         const levelSize = queue.length;
//         const currentLevel: number[] = []
//         for (let i = 0; i < levelSize; i++) {
//             const node = queue.shift()
//             if (node !== undefined && node !== null) {
//                 currentLevel.push(node.val)
//                 if (node.left !== null) queue.push(node.left);
//                 if (node.right !== null) queue.push(node.right)
//             }
//         }
//         result.push(currentLevel)
//     }

//     return result
// };

// const root = createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])
// console.log(levelOrder(root));


// ------------------------------------------------------------------------------------------------


// function isValidBST(root: TreeNode | null): boolean {

//     function isValid(node: TreeNode | null, min: number, max: number): boolean {
//         if (node === null) return true
//         if (node.val <= min || node.val >= max) return false;
//         return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
//     }
//     return isValid(root, -Infinity, Infinity)
// };

// const root = createBinaryTreeFromArray([2, 1, 3])
// console.log(isValidBST(root));


// ------------------------------------------------------------------------------------------------


function kthSmallest(root: TreeNode | null, k: number): number | null {
    let count = 0;
    let result: number | null = null;

    function inOrder(node: TreeNode | null): void {
        if (node === null || result !== null) return;// Base case: null node or found result

        inOrder(node.left); // Visit left subtree

        // Visit the current node
        count++;

        if (count === k) {
            result = node.val;
            return;
        }

        inOrder(node.right); // Visit right subtree
    }

    inOrder(root); // Start in-order traversal from root
    return result;
};

const root = createBinaryTreeFromArray([3, 1, 4, null, 2]), k1 = 1;
console.log(kthSmallest(root, k1));
