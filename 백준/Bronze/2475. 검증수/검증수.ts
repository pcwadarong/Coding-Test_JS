let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const Operator = (arr: Array<number>) => {
    const map = arr.map((el) => el*el);
    let sum = 0;
    for (const element of map){
        sum = sum + element;
    }
    return sum%10;
}

console.log(Operator(input));