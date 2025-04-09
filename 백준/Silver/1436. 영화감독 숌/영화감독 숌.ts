const input = Number(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim());

let num = 0;
let result = 1;

for (let i = 6; num < input; i++){
    if (i.toString().includes('666')) {
        num++;
        result = i;
    }
}

console.log(result);