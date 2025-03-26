const [l, str] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);

const r = 31;
const M = 1234567891;
let hash = 0;

for (let i = 0; i<Number(l); i++) hash = (hash + (str.charCodeAt(i) - 96) * (r ** i)) % M;

console.log(hash);