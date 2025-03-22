const [N, nums1, M, nums2] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);

const integers = new Set(nums1.split(' ').map(Number));
const queries = nums2.split(' ').map(Number);
const answer: number[] = queries.map(e => integers.has(e) ? 1 : 0);

console.log(answer.join('\n'));