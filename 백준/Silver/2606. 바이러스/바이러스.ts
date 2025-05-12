const [computerCount, connectionCount, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const connections = arr.map(line => line.split(' ').map(Number));
const visited = new Set([1]);
const stack = [1];

while (stack.length) {
    const current = stack.pop();
    for (const [a, b] of connections){
        const next = a === current ? b : b === current ? a : null;
        if (next !== null && !visited.has(next)) {
            visited.add(next);
            stack.push(next);
        }
    }
}

console.log(visited.size - 1);