const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const result = input
            .slice(1,T+1)
            .map(line => line.split(" ").map(Number).reduce((a, b) => a + b))
            .join('\n')
            ;
console.log(result);