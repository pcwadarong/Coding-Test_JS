const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCases: string[][] = [];

for (let i = 1; i < input.length; i += 2) {
    if (i + 1 < input.length) testCases.push([input[i], input[i + 1]]);
}

let answers:number[] = [];

for (let i of testCases){
    const M = Number(i[0].split(' ')[1]);
    const queue = i[1].split(' ').map(Number);
    let count = 0;
    let index = M; 
    
    let max = Math.max(...queue);
    let maxCount = queue.filter(e => e === max).length;

    while (queue.length > 0) {
        if (queue[0] === max) {
            queue.shift();
            count ++;
            maxCount --;

            if (index === 0) break;
            else index--;

            if (maxCount === 0) {
                max = Math.max(...queue);
                maxCount = queue.filter(e => e === max).length;
            }
        } else {
            queue.push(queue.shift()!);
            index = index === 0 ? queue.length-1 : index -1;
        }
    }
    answers.push(count);
}

console.log(answers.join('\n'));