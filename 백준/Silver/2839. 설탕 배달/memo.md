## 백준 2839번 - 설탕 배달

### 문제 개요
상근이는 정확히 N킬로그램의 설탕을 배달해야 합니다. 설탕 봉지는 3kg짜리와 5kg짜리가 있으며, 봉지 수를 최소로 하여 배달하려고 합니다. 정확하게 N킬로그램을 만들 수 없다면 -1을 출력합니다.

- 입력: 3 <= N <= 5000
- 출력: 최소 봉지 개수 또는 -1

---

### 접근 방식

#### ✅ 설명 1: 5kg 봉지를 최대한 사용하는 역순 탐색 방식

```ts
const input = Number(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim());

let result = -1;

if (input >= 5){
    if (input % 5 === 0) {
        result = input / 5;
    } else {
        let maxY = Math.floor(input / 5);
        while (maxY >= 0){
            if ((input - 5 * maxY) % 3 === 0) {
                result = maxY + (input - 5 * maxY) / 3;
                break;
            }
            maxY --;
        }
    }
} else {
    if (input % 3 === 0) result = input / 3;  
}

console.log(result);
```

- `5kg` 봉지를 최대한 많이 쓰고, 나머지가 `3kg`으로 나누어떨어지는 경우를 탐색
- 완전탐색처럼 보이지만, `N/5` 범위 내에서만 반복하므로 효율성 OK
- 조건 분기가 명확해서 논리적으로 직관적임

#### ✅ 설명 2: 3씩 줄여가며 5로 나누어떨어지는지만 확인

```ts
const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let count = 0;
while (input >= 0) {
    if (input % 5 === 0) {
        console.log(count + input / 5);
        return;
    }
    input -= 3;
    count++;
}
console.log(-1);
```

- 매 반복마다 3kg 봉지를 하나씩 추가하며 총 무게에서 빼기
- `input % 5 === 0`이 되는 순간이 오면, 그게 가장 적은 봉지 개수
- 자연스럽게 5kg 봉지를 최대로 사용하는 결과 도출
- 코드가 간결하고 직관적이며 빠르게 구현 가능

---

### 정리 및 비교
| 항목 | 설명 1 | 설명 2 |
|------|---------|---------|
| 전략 | 5kg 역순 탐색 후 3kg 확인 | 3씩 줄이면서 5로 나눠지는지 확인 |
| 반복 범위 | 최대 input / 5 | 최대 input / 3 |
| 코드 길이 | 긴 편, 분기 많음 | 매우 간결, 반복 하나뿐 |
| 가독성 | 논리 분명 | 직관적이고 간단함 |
| 성능 | O(N) 이내 | O(N) 이내 (거의 동일함) |
