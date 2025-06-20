## 문제 풀이 과정

[더 자세한 문제 풀이](https://velog.io/@pcwadarong/백준-BAEKJOON-1018-체스판-다시-칠하기-JavaScript)

### **🔹 문제 개요**
M x N 크기의 보드에서 8 x 8 크기의 체스판을 만들려고 한다. 체스판은 반드시 **검은색(B)과 흰색(W)이 번갈아가며 칠해져야 한다**. 따라서 원본 보드를 **8x8 크기로 자를 때, 다시 칠해야 하는 최소 칸 수를 구하는 문제**이다.

---

### **🔹 풀이 접근 방식**
체스판을 올바르게 색칠하는 경우는 **두 가지 경우** 뿐이다.
1. 왼쪽 상단이 **흰색(W)로 시작**하는 체스판
2. 왼쪽 상단이 **검은색(B)로 시작**하는 체스판

즉, 각 8x8 구역을 **두 개의 패턴과 비교해서 몇 개를 다시 칠해야 하는지 계산한 후, 최소값을 찾으면 된다**.

---

### **🔹 코드**
```ts
const [size, ...chess] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);
const [N, M] = size.split(' ').map(Number);
let minimum = Infinity;

// 기준 체스판 패턴
const whiteStart = ['WBWBWBWB', 'BWBWBWBW'];
const blackStart = ['BWBWBWBW', 'WBWBWBWB'];

for (let i = 0; i <= N - 8; i++) { // 8x8을 자를 수 있는 행 범위
    for (let j = 0; j <= M - 8; j++) { // 8x8을 자를 수 있는 열 범위
        let countWhite = 0;  // W 시작 체스판과 비교한 변경 횟수
        let countBlack = 0;  // B 시작 체스판과 비교한 변경 횟수
        
        for (let x = 0; x < 8; x++) { // 최대 8칸까지 검사
            for (let y = 0; y < 8; y++) {
                const square = chess[i + x][j + y]; // 현재 위치의 색상
                
                // W 시작 체스판과 비교 (짝수 줄은 WBWBWBWB, 홀수 줄은 BWBWBWBW)
                if (square !== whiteStart[x % 2][y]) countWhite++;
                
                // B 시작 체스판과 비교 (짝수 줄은 BWBWBWBW, 홀수 줄은 WBWBWBWB)
                if (square !== blackStart[x % 2][y]) countBlack++;
            }
        }
        
        // 현재 8x8 구간에서 최소 변경 횟수 갱신
        minimum = Math.min(minimum, countWhite, countBlack);
    }
}

console.log(minimum);
```

---

### **🔹 상세 풀이**
#### **1. 기준 패턴 정의**
체스판은 두 가지 경우가 있다.
- **흰색(W)로 시작하는 경우**: 첫 줄이 `WBWBWBWB`, 다음 줄이 `BWBWBWBW` 반복
- **검은색(B)로 시작하는 경우**: 첫 줄이 `BWBWBWBW`, 다음 줄이 `WBWBWBWB` 반복
- 이를 배열로 저장하여 비교할 때 활용

```ts
const whiteStart = ['WBWBWBWB', 'BWBWBWBW'];
const blackStart = ['BWBWBWBW', 'WBWBWBWB'];
```

#### **2. 8x8 크기의 모든 경우 탐색**
보드 전체에서 **8x8 크기로 자를 수 있는 모든 구역을 검사**한다.
- 가능한 시작점 `(i, j)`를 설정
- `i`와 `j`의 최대값은 `N-8`, `M-8`이 되어야 함

```ts
for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
```

#### **3. 8x8 영역에서 변경해야 하는 개수 비교**
- **현재 검사하는 8x8 부분을 두 가지 체스판 패턴과 비교**
- `x + y`가 **짝수이면 기준 색과 같아야 하고, 홀수이면 반대여야 한다**
- 이유는, x와 y가 둘 다 짝수거나 홀수일 때 첫 번째 칸과 같을 조건이 성립하기 때문이다.

```ts
for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        const square = chess[i + x][j + y];
        
        // W 시작 체스판과 비교 (짝수 줄은 WBWBWBWB, 홀수 줄은 BWBWBWBW)
        if (square !== whiteStart[x % 2][y]) countWhite++;
        
        // B 시작 체스판과 비교 (짝수 줄은 BWBWBWBW, 홀수 줄은 WBWBWBWB)
        if (square !== blackStart[x % 2][y]) countBlack++;
    }
}
```
- 따라서 아래처럼 매번 계산하는 과정으로 풀어도 됨. (효율성은 떨어진다)
```ts
 if ((x + y) % 2 === 0) {  
    if (square !== 'W') countWhite++;
    if (square !== 'B') countBlack++;
} else {  
    if (square !== 'B') countWhite++;
    if (square !== 'W') countBlack++;
}
```

#### **4. 최소 변경 횟수 갱신**
- `countWhite`와 `countBlack` 중 더 적게 변경하는 경우를 선택
- 최소값을 계속 갱신하여 최적의 경우를 찾음

```ts
minimum = Math.min(minimum, countWhite, countBlack);
```
