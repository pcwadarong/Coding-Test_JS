### ✨ 해결 방법
우선 배열 input을 알파벳 string 각각의 배열로 가공합니다.
갯수를 나타내는 가장 첫 번째 요소를 삭제하고, `set`을 사용하여 중복을 제거합니다.
이를 다시 정렬하기 위해 배열로 만들고, 두 가지 조건으로 정렬합니다.
1. 길이가 짧은 순으로 정렬
2. 길이가 같을 경우 -> 알파벳 순으로 정렬

### 💻 solution

```ts
const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString().trim().split('\n');

const uniqueWords = new Set([...input].slice(1)); // 중복 제거
const sortedWords = [...uniqueWords].sort((a, b) => a.length - b.length || a.localeCompare(b)))); // 재정렬

console.log(arr.join('\n'))
```
`||`의 경우 앞의 것을 따지고, 해당하지 않을 경우 넘어오기 때문에 길이가 같은 경우에만 비교할 수 있습니다.

> ❓ **`sort()` 알파벳 순으로 정렬하는데 `localeCompare`을 사용한 이유가 뭔가요?**
> 
> 물론, 대부분의 경우엔 `.sort().sort((a, b) => a.length - b.length)` 와 위의 식이 동일하게 동작합니다. 하지만 `sort`는 항상 ASCII 코드 순서를 기준으로 하기 때문에, 가령 아래와 같은 경우에선 예상과 다르게 동작할 수 있습니다.


`const words = ["éclair", "elephant", "apple", "Étoile", "banana"];` (프랑스어 기준)

| sort() 기본 정렬 (ASCII) | localeCompare("fr") 프랑스어 기준 |
|  -  |   -  |
| Étoile | apple |
| apple | banana |
| banana | elephant |
| elephant | éclair |
| éclair | Étoile |

---
### 💻 solution2
다른 방법으로, `sort`로 길이로만 정렬한 후`stack`을 사용하여 알파벳 순으로 정렬할 수 있습니다.

```ts
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const uniqueWords = new Set([...input].slice(1)); // 중복 제거
const sortedByLength = [...uniqueWords].sort((a, b) => a.length - b.length); // 길이순 정렬

let stack: string[] = [];
let result: string[] = [];

// ✅ stack을 활용한 정렬
for (let word of sortedByLength) {
    if (!stack.length || stack[stack.length - 1].length === word.length) {
        stack.push(word);
    } else {
        // 현재 단어와 길이가 다르면 stack 내부를 정렬하여 결과에 추가
        stack.sort((a, b) => a.localeCompare(b));
        result.push(...stack);
        stack = [word]; // 새로운 길이의 단어 추가
    }
}

// ✅ 마지막 남은 stack 정렬 후 result에 추가
if (stack.length) {
    stack.sort((a, b) => a.localeCompare(b));
    result.push(...stack);
}

// ✅ 최종 출력
console.log(result.join("\n"));
```
