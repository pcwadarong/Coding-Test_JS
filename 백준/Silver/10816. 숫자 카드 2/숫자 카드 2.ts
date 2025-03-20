const [N, c, M, q] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);

const cardList = c.split(' ').map(Number);
const queries = q.split(' ').map(Number);
const hashMap = new Map();
const result:number[] = [];

cardList.forEach(card => hashMap.set(card, (hashMap.get(card) || 0) + 1));
queries.forEach(num => result.push(hashMap.get(num) || 0))

console.log(result.join(' '));