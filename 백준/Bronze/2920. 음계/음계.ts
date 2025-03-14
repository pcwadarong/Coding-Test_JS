let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let answer = '';

const func = (arr: number[]): string => {
    answer = arr[0] === 1 ? 'ascending' : arr[0] === 8 ? 'descending' : 'mixed';

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i+1] - arr[i];

        if (diff !== 1 && diff !== -1) return 'mixed';
        if ((answer === 'ascending' && diff === -1) || (answer === 'descending' && diff === 1)) return 'mixed';
    }
    return answer;
}

console.log(func(input))