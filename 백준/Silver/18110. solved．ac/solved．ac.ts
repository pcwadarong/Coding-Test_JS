const [n, ...A] = require('fs').readFileSync("/dev/stdin")
    .toString().trim().split(/\r?\n/).map(Number);

if (n === 0) console.log(0);
else {
    A.sort((a,b) => a-b);
    const removedCount = Math.round(n * 0.15);
    const trimmed = A.slice(removedCount, n-removedCount);

    let sum = 0;
    trimmed.forEach(e => sum += e)
    console.log(Math.round(sum/trimmed.length));
}