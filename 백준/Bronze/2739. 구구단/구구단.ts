const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i=1; i<=9; i++){
    console.log(`${input} * ${i} = ${input * i}`)
}