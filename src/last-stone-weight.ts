function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => b - a)

    while (stones.length > 1) {
        // Take the two heaviest stones
        const stone1 = stones.shift() as number;
        const stone2 = stones.shift() as number;

        // If the stones are not the same, put the diffent back into the array
        if (stone1 !== stone2) {
            stones.push(stone1 - stone2);
        }
        stones.sort((a, b) => b - a)
    }
    return stones.length === 0 ? 0 : stones[0]
};

const stones = [2, 7, 4, 1, 8, 1]
console.log(lastStoneWeight(stones));
