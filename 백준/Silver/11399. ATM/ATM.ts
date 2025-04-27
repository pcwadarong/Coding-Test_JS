const [N, P] = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);
console.log(P.split(' ').map(Number).sort((a,b) => b-a).reduce((acc, cur, i) => acc + cur * (i + 1), 0));