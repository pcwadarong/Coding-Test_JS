const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const queue:number[] = [];
const answerArr:number[] = [];

for (let el of input){
    switch (el.split(' ')[0]){
        case 'push':
            queue.push(el.split(' ')[1]);
            break;
        case 'pop':
            answerArr.push(queue[0] ? queue.shift()! : -1);
            break;
        case 'size':
            answerArr.push(queue.length);
            break;
        case 'empty':
            answerArr.push(queue[0] ? 0 : 1);
            break;
        case 'front':
            answerArr.push(queue[0] ? queue[0] : -1);
            break;
        case 'back':
            answerArr.push(queue[0] ? queue[queue.length-1] : -1);
            break;
        default:
            break;
    }
}
console.log(answerArr.join('\n'))
