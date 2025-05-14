## 해당 문제: 색종이 자르기 (BOJ 2630)

하얀색과 파란색으로 구성된 N×N 종이를 다음 규칙에 따라 자르는 문제:
- 하나의 정사각형 영역이 전부 같은 색이면 해당 색의 색종이로 간주
- 색이 섞여 있으면 4등분하여 같은 과정을 반복

---

## 해결 전략

1. `grid`를 입력으로 받아 2차원 배열로 구성
2. `isSameColor(x, y, size)`
   - (x, y)를 시작으로 한 `size × size` 정사각형이 모두 같은 색인지 확인
3. `divide(x, y, size)`
   - 같으면 해당 색 카운트 증가, 다르면 size/2로 4등분하여 재귀 호출

---

## 개수 계산 코드

```ts
const [N, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +N;

// 입력된 각 줄을 공백 기준으로 나눈 뒤 숫자로 변환하여 2차원 배열로 구성
const grid = lines.map(line => line.split(' ').map(Number));

// 색상 개수를 저장할 객체. white는 0, blue는 1에 해당
const colorCount = {
  white: 0,
  blue: 0,
};

// 해당 영역이 모두 같은 색인지 확인하는 함수
function isSameColor(x: number, y: number, size: number): boolean {
  const color = grid[y][x]; // 기준이 되는 색상
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (grid[i][j] !== color) return false; // 하나라도 다르면 같은 색이 아님
    }
  }
  return true; // 전체가 동일한 색이면 true
}

// 색종이 영역을 재귀적으로 분할하는 함수
function divide(x: number, y: number, size: number): void {
  if (isSameColor(x, y, size)) {
    // 현재 영역이 모두 같은 색이면 해당 색상 카운트 증가
    const color = grid[y][x];
    colorCount[color === 0 ? 'white' : 'blue']++;
    return;
  }

  // 색이 섞여 있다면 4등분하여 재귀적으로 divide 호출
  const half = size >> 1; // 비트 연산으로 size를 2로 나눈 값
  divide(x, y, half);               // 왼쪽 위 영역
  divide(x + half, y, half);        // 오른쪽 위 영역
  divide(x, y + half, half);        // 왼쪽 아래 영역
  divide(x + half, y + half, half); // 오른쪽 아래 영역
}

// 전체 종이에 대해 divide 함수 실행
divide(0, 0, n);

// 결과 출력
console.log(colorCount.white);
console.log(colorCount.blue);
```
