const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split('\n');

const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);
let average = 0;

for (let score of scores){
    let newScore = score/max*100;
    average += newScore;
}

console.log(average/scores.length);
