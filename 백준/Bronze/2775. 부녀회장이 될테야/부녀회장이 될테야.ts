const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');
const [T, ...cases] = input;
const apart = Array.from({ length: 15 }, (_, row) => Array.from({ length: 14 }, (_, col) => (row === 0 ? col + 1 : col === 0 ? 1 : 0)));

for (let i=0; i<T; i++){
    const k = Number(cases.shift());  // row는 0부터 시작, col은 1부터 시작해야 됨
    const n = Number(cases.shift()) - 1;
    if (isNaN(k) || isNaN(n)) continue;
    
    for (let j=1; j<=k; j++){
        for (let l=1; l<=n; l++){
            if (!apart[j][l]){
                // 앞 집의 인원 수 + 아랫 집 인원 수
                apart[j][l] = apart[j-1][l] + apart[j][l-1];
            }
        }
    }

    console.log(apart[k][n]);
};