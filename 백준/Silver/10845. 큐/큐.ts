const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const queue:number[] = [];
const answerArr:number[] = [];

for (let el of input){
    if (el.startsWith('push')){
        queue.push(el.split(' ')[1]);
    } else if (el.startsWith('pop')){
        if (queue[0]){
            answerArr.push(queue[0]);
            queue.shift();
        } else {
            answerArr.push(-1);
        }
    } else if (el.startsWith('size')){
        answerArr.push(queue.length);
    } else if (el.startsWith('empty')){
        if (queue[0]){
            answerArr.push(0);
        } else {
            answerArr.push(1);
        }
    } else if (el.startsWith('front')){
        if (queue[0]){
            answerArr.push(queue[0]);
        } else {
            answerArr.push(-1);
        }
    } else if (el.startsWith('back')){
        if (queue[0]){
            answerArr.push(queue[queue.length-1]);
        } else {
            answerArr.push(-1);
        }
    }
}
console.log(answerArr.join('\n'))