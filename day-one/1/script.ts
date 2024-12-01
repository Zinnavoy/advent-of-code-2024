import { readInput } from "@/utils/input-loader";

function calculateMinimalDistancePairing(pairs: number[][]): number {
    const leftList = pairs.map(pair => pair[0]);
    const rightList = pairs.map(pair => pair[1]);

    const sortedLeft = leftList.slice().sort((a, b) => a - b);
    const sortedRight = rightList.slice().sort((a, b) => a - b);

    return sortedLeft.reduce((total, _, index) => 
        total + Math.abs(sortedLeft[index] - sortedRight[index]), 0);
}

function advent() {
    try {
        const pairs = readInput(__dirname);
        const result = calculateMinimalDistancePairing(pairs);

        console.log('Total Minimal Distance: ', result);
    } catch (error) {
        console.error('I did a poopoo: ', error);
    }
}

advent();