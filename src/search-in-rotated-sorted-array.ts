function search(nums: number[], target: number): number {
    /**
     * 旋转处是 transformNumber =  nums[0] - 1;
     * 获取数组长度，判断截断的起点
     * 判断 target 比 transformNumber 大，说明需要正向搜索，如果小，则需要倒序搜索
     * 
     * 
     * */

    const transformNumber = nums[0] - 1;

    0

    // 正向搜索
    const frontSearch = (start: number, end: number) => {
        for (let i = 0; i < end; i++) {
            console.log(nums[i]);
            if (nums[i] === target) return i;
        }
        return -1;
    }

};

const nums6 = [4, 5, 6, 7, 0, 1, 2], target6 = 0
console.log(search(nums6, target6));
