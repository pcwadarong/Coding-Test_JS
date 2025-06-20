const wordToNum = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    };

function solution(s) {
    let letter = '';
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            answer += s[i];
            continue;
        }
        letter += s[i];
        if (wordToNum.hasOwnProperty(letter)) {
            answer += wordToNum[letter];
            letter = '';
        }
    }
    return +answer;
}
