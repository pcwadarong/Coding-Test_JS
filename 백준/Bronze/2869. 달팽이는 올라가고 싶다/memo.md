**문제 요약: 달팽이 나무 막대 오르기**

- 달팽이는 낮에 A미터 올라가고, 밤에 B미터 미끄러진다
- 막대의 높이는 V미터
- 마지막 날에는 미끄러지지 않음 (즉, 도달만 하면 바로 끝남)
- 목표: 며칠 만에 정상에 도달하는지 계산

---

**첫 번째 코드 (시뮬레이션 방식, O(N))**

```ts
let [A, B, V] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(' ').map(Number);

let result = 0;
let day;
let night = V;

while (true) {
    day = night - A;
    result++;
    if (day <= 0) break;
    else night = day + B;
}

console.log(result);
```

- 매일 한 사이클: 낮에 올라가고, 밤에 미끄러짐
- 도달할 때까지 반복
- 입력값이 클 경우 (ex. V = 1,000,000,000) 시간 초과 발생 가능

---

**문제 핵심 해석**

- 하루 동안 실질적으로 올라가는 거리: `A - B`
- 마지막 날은 A만큼 올라가서 V에 도달 → 전날까지 `V - A` 지점에 도달해 있으면 OK
- 따라서 계산식은:

$$ \text{일수} = \left\lceil \frac{V - A}{A - B} \right\rceil + 1 $$


---

**두 번째 코드 (수학적 접근, O(1))**

```ts
const [A, B, V] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(' ').map(Number);

console.log(Math.ceil((V - A)/(A - B)) + 1);
```

- 반복 없이 한번에 정답 도출
- 수식 기반이기 때문에 입력이 커도 빠르게 계산 가능
- `Math.ceil`을 통해 도달 전날까지 필요한 일수 계산
- `+1`은 마지막 날에 올라가는 날 포함

