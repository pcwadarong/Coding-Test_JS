const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const iter = input.slice(0, 1);
let ranks: number[] = [];

for (let i = 1; i<= iter; i++){
    let rank = 1;
    const [w, h] = input[i].split(' ').map(Number);

    for (let j=1; j<= iter; j++){
        if (i !== j){
            const [compW, compH] = input[j].split(' ').map(Number);
            
            if (compW > w && compH > h){
                rank ++;
            }
        }
    }
    ranks.push(rank);
}

console.log(ranks.join(" "))