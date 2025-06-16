function solution(clothes) {
    let answer = 1;
    let comb = new Map();

    clothes.forEach(([_, type]) => {
        comb.set(type, (comb.get(type) || 0) + 1);
    });

    comb.forEach(count => {
        answer *= (count + 1);
    });

    return answer - 1;
}