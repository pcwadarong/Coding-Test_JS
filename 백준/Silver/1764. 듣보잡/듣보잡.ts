const [num, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = num.split(' ').map(Number);
const result:string[] = [];

const notHeard = arr.slice(0, N);
const notSeenSet = new Set(arr.slice(N));

for (const name of notHeard) {
    if (notSeenSet.has(name)) result.push(name); // O(1)
}

console.log(result.length);
console.log(result.sort((a,b) => a.localeCompare(b)).join('\n'));