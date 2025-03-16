const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split('\n');

const arr = Array.from(new Set([...input].slice(1).sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)));
console.log(arr.join('\n'))