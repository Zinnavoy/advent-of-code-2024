import { readInput } from "@/utils/input-loader";

function calculateSimilarityScore(pairs: number[][]): number {
    const leftList = pairs.map(pair => pair[0]);
    const rightList = pairs.map(pair => pair[1]);
    
    const rightListCounts = new Map<number, number>();

    for (const num of rightList) {
        rightListCounts.set(num, (rightListCounts.get(num) || 0) + 1);
    }

    let similarityScore = 0;
    for (const num of leftList) {
        const occurrences = rightListCounts.get(num) || 0;
        
        similarityScore += num * occurrences;
    }

    return similarityScore;
}

function advent() {
    try {
        const pairs = readInput(__dirname);
        const result = calculateSimilarityScore(pairs);
        
        console.log('Similarity Score: ', result);
    } catch (error) {
        console.error('Again? ', error);
    }
}

advent();