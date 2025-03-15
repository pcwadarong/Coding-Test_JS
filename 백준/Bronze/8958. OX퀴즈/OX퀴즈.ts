let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const results = input.map(row => 
    // let score = 0, point = 0;
    // for (const el of row){
    //     point = el === 'O' ? point + 1 : 0;
    //     score += point;
    // }
    // return score;

    [...row].reduce(([score, point], el) =>
        el === 'O' ? [score + point + 1, point + 1] : [score, 0], [0 , 0])[0]
)
console.log(results.join('\n'));