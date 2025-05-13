const [T, ...lines] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let ptr = 0;
const result : number[] = [];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < +T; i++){
    const [M, N, K] = lines[ptr++].split(' ').map(Number);
    const positions = Array.from({ length: N }, () => Array(M).fill(0));
    const visited = Array.from({ length: N }, () => Array(M).fill(0));
    let count = 0;

    for (let j = 0; j < K; j++){
        const [x, y] = lines[ptr++].split(' ').map(Number);
        positions[y][x] = 1;
    }

    function dfs( startY: number, startX: number ){
        const stack = [[startY, startX]];
        visited[startY][startX] = 1;

        while (stack.length) {
            const [y, x] = stack.pop()!;

            for (let d = 0; d < 4; d++){
                const ny = y + dy[d];
                const nx = x + dx[d];

                if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
                    if (positions[ny][nx] === 1 && !visited[ny][nx] ){
                        visited[ny][nx] = 1;
                        stack.push([ny, nx]);
                    }
                }
            }
        }
    }

    for (let x = 0; x < M; x++){
        for (let y = 0; y < N; y++){
            if (positions[y][x] === 1 && !visited[y][x]) {
               dfs(y, x);
                count++;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            }
        }
    }

    result.push(count);
}

console.log(result.join('\n'));