const [meta, numbers, ...queries] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = numbers.split(' ').map(Number);

const prefixSum = [0];
for (let i = 0; i<nums.length; i++){
    prefixSum[i + 1] = prefixSum[i] + nums[i];
}

const result = queries.map(line => {
    const [start, end] = line.split(' ').map(Number);
    return prefixSum[end] - prefixSum[start - 1];
})

console.log(result.join('\n'));