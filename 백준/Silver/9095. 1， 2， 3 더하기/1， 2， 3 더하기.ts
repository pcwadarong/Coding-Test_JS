const [T, ...cases] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const max = Math.max(...cases);
const dp: number[] = [0, 1, 2, 4];

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

console.log(cases.map(n => dp[n]).join('\n'));