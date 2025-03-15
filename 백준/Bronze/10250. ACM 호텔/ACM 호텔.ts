let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = input.slice(1).map(row => {
    const [h, w, n] = row.split(' ').map(Number);
    let y = n % h === 0 ? h : n % h;
    let x = n % h === 0 ? Math.floor(n / h) : Math.floor(n / h) + 1;

    return y*100+x
})
console.log(result.join('\n'))