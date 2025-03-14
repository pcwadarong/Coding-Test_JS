let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function isUpperCase(str: string){
    return str === str.toUpperCase(); //대문자라면 true, 소문자라면 false
}

const answer = input.split('').map((e) => isUpperCase(e) ? e.toLowerCase() : e.toUpperCase())
console.log(answer.join(''));