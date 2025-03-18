const input = Number(require('fs').readFileSync("/dev/stdin").toString());
const queue: number[] = Array.from({length: input}, (_, i) => i + 1 );
let front = 0;

while (queue.length - front > 1) {
    front++; // 앞의 카드 버림
    queue.push(queue[front]); // 두 번째 카드를 뒤로 이동
    front++; // 다음 카드도 버린 효과
}

console.log(queue[front]);