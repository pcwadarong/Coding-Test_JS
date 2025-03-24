### 문제 해석
![image](https://github.com/user-attachments/assets/c63cce48-8ab2-4017-90f6-7627f451f909)
1을 기준으로 6의 배수개만큼 늘어나며 원형으로 증가하는 구조
각 원형의 최대값을 a1, a2, a3, a4... 라고 할 때,
```js
a1 = 1 + 6 * 0
a2 = 1 + 6 * 1
a3 = 1 + 6 * (2 + 1)
a4 = 1 + 6 * (3 + 2 + 1)
...
```
따라서 `an = 1 + 6 * (n-1 + n-2 + n-3 + .... + 1)`
즉, `an = 1 + 6 * n * (n-1) / 2` 이다.

각 숫자로 가는 최단 거리 또한 n과 같기 때문에, 주어지는 어떤 수 N이 가능한 가장 작은 an보다 작을 때의 n을 값을 구하면 된다.

### 문제 해결 방법
#### 반복문 해결법
```ts
let result = -Infinity;

for (let i=1; i<50000; i++){ 
    if (input <= 6*i*(i-1)/2 + 1) {
        result = i;
        break;
    }
}

console.log(result);
```
#### 이진 탐색 해결법
```ts
let left = 1;
let right = 1e6;
let result = 0;

while (left <= right){
    const mid = Math.floor((left + right)/ 2);
    const value = (6 * mid * (mid - 1)) / 2 + 1;

    if (input <= value) {
        result = mid;
        right = mid - 1;
    } else left = mid + 1;
}

console.log(result);
```
