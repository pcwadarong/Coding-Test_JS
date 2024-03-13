function solution(clothes) {
    let answer = 1;
    let comb = new Map();
    clothes.forEach((cloth)=>{
        comb.set(cloth[1], (comb.get(cloth[1])||0) + 1);
    })

    comb.forEach (count => {
        answer *= (count + 1);
    })
    
    return answer - 1;
}