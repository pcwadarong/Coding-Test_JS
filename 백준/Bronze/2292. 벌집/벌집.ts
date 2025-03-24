const input = Number(require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString());

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