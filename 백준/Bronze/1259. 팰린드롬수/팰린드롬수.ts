const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);
input.pop();
const result: string[] = [];

input.forEach(e => {
    const numArr = e.split('').map(Number);
    const stack: number[] = [];
    for (let i = 0; i < numArr.length; i++) {
        if (i <= Math.floor(numArr.length / 2) - 1) {
            stack.push(numArr[i]);
        } 
        else if (numArr.length % 2 !== 0 && i === Math.floor(numArr.length / 2)) continue;
        else {
            if (stack[stack.length - 1] === numArr[i]) stack.pop();
            else break;
        }
    }
    result.push(stack.length === 0 ? 'yes' : 'no');
})

console.log(result.join('\n'))