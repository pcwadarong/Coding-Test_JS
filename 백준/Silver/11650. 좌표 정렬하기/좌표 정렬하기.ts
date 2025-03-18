const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const sorted = input.slice(1)
    .map(dot => dot.split(' ').map(Number))
    .sort(([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2)
    .map(pair => pair.join(" "))
    .join("\n")

console.log(sorted);