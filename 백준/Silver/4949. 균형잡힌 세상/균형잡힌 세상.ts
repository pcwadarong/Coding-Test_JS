const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);
const result:string[] = [];

for (const sent of input.slice(0, -1)) {
    const stack: string[] = [];
    let isValid = true;

    for (let ch of sent){
        if (ch === '(' || ch === '[') stack.push(ch);
        else if (ch === ')' || ch === ']') {
            const last = stack.pop();
            if (last !== '(' && ch === ')' || last !== '[' && ch === ']') {
            isValid = false;
            break;
            }
        }
    }
    result.push(isValid && stack.length === 0 ? 'yes' : 'no');
}

console.log(result.join('\n'));