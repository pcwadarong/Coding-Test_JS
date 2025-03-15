const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const stack:number[] = [];
const answerArr:number[] = [];

for (let el of input){
    if (el.startsWith('push')){
        stack.push(el.split(' ')[1]);
    } else if (el.startsWith('pop')){
        if (stack[0]){
            answerArr.push(stack[stack.length-1]);
            stack.pop();
        } else {
            answerArr.push(-1);
        }
    } else if (el.startsWith('size')){
        answerArr.push(stack.length);
    } else if (el.startsWith('empty')){
        if (stack[0]){
            answerArr.push(0);
        } else {
            answerArr.push(1);
        }
    } else if (el.startsWith('top')){
        if (stack[0]){
            answerArr.push(stack[stack.length-1]);
        } else {
            answerArr.push(-1);
        }
    }
}
console.log(answerArr.join('\n'))