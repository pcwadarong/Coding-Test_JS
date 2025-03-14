let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const arr = input.map((row) => row.split(' '));
arr.forEach(e => {
    let answer = [...e[1]].map(el => el.repeat(e[0]));
    console.log(answer.join(''))
})
