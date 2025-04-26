const [N, ...A] = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\r?\n/).map(Number);
A.sort((a, b) => a - b);

let sum = 0, maxFreq = 0;
const freq: Record<number, number> = {}, modes:number[] = [];

for (let i = 0; i < N; i++) {
    sum += A[i];

    freq[A[i]] = (freq[A[i]] || 0) + 1;
    if (freq[A[i]] > maxFreq) maxFreq = freq[A[i]];
}

for (const key in freq) {
    if (freq[key] === maxFreq) modes.push(+key);
}
modes.sort((a, b) => a - b);

console.log(Math.round(sum / N) === -0 ? 0 : Math.round(sum / N));
console.log(A[Math.floor(N / 2)]);
console.log(modes.length > 1 ? modes[1] : modes[0]);
console.log(A[N - 1] - A[0]);