const [N, K]  = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().split(' ').map(Number);
const queue = Array.from({length: N}, (_,i) => i+1);
let index = 0;
let result:number[] = [];

while (queue.length){
    index = (index + K - 1) % queue.length;
    result.push(queue.splice(index, 1)[0]);
}

console.log(`<${result.join(', ')}>`)