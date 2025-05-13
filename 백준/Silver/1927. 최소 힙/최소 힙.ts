const [N, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const heap: number[] = [];
const result : number[] = [];

function push(n: number){
    heap.push(n);
    let i = heap.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (heap[p] <= heap[i]) break;
        [heap[i], heap[p]] = [heap[p], heap[i]];
        i = p;
    }
}

function pop() {
  if (heap.length === 0) return 0;

  const min = heap[0];
  const end = heap.pop()!;

  if (heap.length > 0) {
    heap[0] = end;
    bubbleDown();
  }

  return min; 
}

function bubbleDown() {
  let i = 0;
  while (true) {
    const l = (i << 1) + 1;
    const r = l + 1;
    let s = i;

    if (l < heap.length && heap[l] < heap[s]) s = l;
    if (r < heap.length && heap[r] < heap[s]) s = r;
    if (s === i) break;

    [heap[i], heap[s]] = [heap[s], heap[i]];
    i = s;
  }
}

for (let line of lines) {
    const num = +line;
    if (num === 0) result.push(pop());
    else push(num);
}

console.log(result.join('\n'));