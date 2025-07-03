function findPrime(num){
    const number = Number(num);
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const candidates = n.toString(k).split('0');
    return candidates.filter(e => findPrime(+e)).length;
    return answer;
}