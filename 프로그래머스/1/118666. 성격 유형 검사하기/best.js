function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    // object를 직접 초기화하지 않고 mbti안에 하나씩 split해서 넣는 방법 + 동시에 types 묶음을 만들 수 있음
    // MBTI = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 }
    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )
  
    // choices와 survey는 같은 인덱스와 갯수를 가지기 때문에 하나를 택한 뒤 survey에서 구조분해할당이 가능함
    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    // map안에서 types을 split하여 구조분해할당하는 방법
    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
