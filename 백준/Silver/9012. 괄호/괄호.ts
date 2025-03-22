const [T, ...arr] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split(/\r?\n/);
const result: string[] = [];

arr.forEach(e => {
    const stack: string[] = [];
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            stack.push(e[i]);
        } else { // ')'
            if (stack.length === 0) {
                stack.push(e[i]);
                break;
            }
            else stack.pop();
        }
    }
    result.push(stack.length > 0 ? 'NO' : 'YES')
})

console.log(result.join('\n'));