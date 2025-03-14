const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const result = input
            .map(line => line.split(" ").map(Number).reduce((a, b) => a + b))
            .join('\n');
console.log(result);