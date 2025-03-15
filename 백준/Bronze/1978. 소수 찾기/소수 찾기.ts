const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

input.slice(1).toString().split(' ').map(Number).forEach((e) => {
    if (e === 1) return;
    for (let i = 2; i <= Math.sqrt(e); i++){
        if (e % i === 0) return;
    }
    count ++;
})

console.log(count);