import * as fs from 'fs';
import * as path from 'path';

function readInput(scriptPath: string): number[][] {
    const filePath = path.join(scriptPath, 'input.txt');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines: string[] = fileContent.trim().split('\n');
    
    return lines.map(line => {
        const [left, right] = line.trim().split(/\s+/).map(Number);
        return [left, right];
    });
}

export { readInput };