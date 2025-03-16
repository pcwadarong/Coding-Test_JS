const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const stack:number[] = [];
const answerArr:number[] = [];

for (let el of input){
    switch(el.split(' ')[0]){
        case 'push':
            stack.push(el.split(' ')[1]);
            break;
        case 'pop':
            answerArr.push(stack[0] ? stack.pop()! : -1);
            break;
        case 'size':
            answerArr.push(stack.length);
            break;
        case 'empty':
            answerArr.push(stack[0] ? 0 : 1);
            break;
        case 'top':
            answerArr.push(stack[0] ? stack[stack.length-1] : -1);
            break;
        default:
            break;
    }
}
console.log(answerArr.join('\n'))