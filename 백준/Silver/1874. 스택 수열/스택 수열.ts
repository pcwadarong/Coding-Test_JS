const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();
const stack: number[] = [];
const arr: string[] = [];
let err = '';
let nextPush = 1;

for (let e of input){
    while (nextPush <= e){
        stack.push(nextPush);
        arr.push('+');
        nextPush++;
    }
    if (stack[stack.length-1] === e){
        stack.pop();
        arr.push('-');
    }
    if (stack[stack.length-1] > e){
        err = 'NO';
    }
}

const answer = err ? err : arr.join('\n');
console.log(answer);