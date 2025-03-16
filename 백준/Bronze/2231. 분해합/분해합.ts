const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim();

const findM = (N: number) => {
    for (let i=1; i<N; i++){
        let arr = i.toString().split('');
        if (arr.reduce((acc, cur) => acc + Number(cur), 0) + i === N) return i;
    }
    return 0;
}

console.log(findM(parseInt(input)));