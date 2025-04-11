const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [irr, ...arr] = input;
const stack:number[] = [];

for (let i = 0; i<irr; i++){
    if (arr[i] === 0) stack.pop();
    else stack.push(arr[i]);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));