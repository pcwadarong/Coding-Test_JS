let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

let result = input.map((el) => {
    const [b, h, d] = el.split(' ').map(Number);
    const isRightTriangle = b*b + h*h === d*d || h*h + d*d === b*b || b*b + d*d === h*h;
    return isRightTriangle === true ? 'right' : 'wrong';
})

console.log(result.join('\n'));