function solution(phone_book) {
    let answer = true;
    const a = phone_book.sort();

    for (let i = 0; i < a.length - 1; i++) {
        if (a[i+1].startsWith(a[i])){
                answer= false;
                break;
        }
    }
    return answer;
}