function allPathsSourceTarget(graph: number[][]): number[][] {
    const res: number[][] = []
    const path: number[] = []
    const dfs = (node: number): void => {
        // 将当前节点加入路径
        path.push(node)

        // 如果到达目标节点，将当前路径保存到结果中
        if (node === graph.length - 1) {
            res.push([...path])
        } else {
            // 遍历当前节点的所有邻居
            for (const nextNode of graph[node]) {
                dfs(nextNode)
            }
        }
        // 回溯：移除当前节点尝试其他路径
        path.pop();
    }
    dfs(0)
    return res;
};

const graph = [[1, 2], [3], [3], []]
console.log(allPathsSourceTarget(graph));
