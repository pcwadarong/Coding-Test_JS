function countElements(arr) {
    const elementCount = new Map();

    arr.forEach(element => {
        elementCount.set(element, (elementCount.get(element) || 0) + 1);
    });

    return elementCount;
}

function solution(participant, completion) {
    var answer = '';
    const partIn = countElements(participant);
    const finish = countElements(completion);

    partIn.forEach((value, key) => {
        if (value !== finish.get(key)){
            answer = key;
        }
    });
    return answer;
}