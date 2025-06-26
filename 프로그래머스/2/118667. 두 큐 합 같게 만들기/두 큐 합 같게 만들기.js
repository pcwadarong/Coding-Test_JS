function solution(queue1, queue2) {
    const total = queue1.concat(queue2);
    const goal = total.reduce((a, b) => a + b) / 2;
    if (goal * 2 % 2 !== 0) return -1;
    
    let sum = queue1.reduce((a, b) => a + b);
    const n = queue1.length;
    const limit = n * 3;
    let i = 0;
    let j = n;

    for (let count = 0; count <= limit; count++) {
        if (sum === goal) return count;

        if (sum > goal) {
            sum -= total[i % (2 * n)];
            i++;
        } else {
            sum += total[j % (2 * n)];
            j++;
        }
    }
    return -1;
}