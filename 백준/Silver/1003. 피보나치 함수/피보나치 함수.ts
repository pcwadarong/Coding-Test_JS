const [T, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const result:string[] = [];
const memo: Record<number, { zero: number, one: number }> = {
    0: { zero: 1, one: 0 },
    1: { zero: 0, one: 1 },
  };

  function fibonacci(N: number): { zero: number, one: number } {
    if (memo[N]) return memo[N];

    const a = fibonacci(N - 1);
    const b = fibonacci(N - 2);

    memo[N] = {
        zero: a.zero + b.zero,
        one: a.one + b.one
    }
    return memo[N];
}

for (let N of arr) {
    result.push(`${fibonacci(N).zero} ${fibonacci(N).one}`);
}

console.log(result.join('\n'));
