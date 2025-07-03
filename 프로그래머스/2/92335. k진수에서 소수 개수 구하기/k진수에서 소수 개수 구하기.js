function solution(n, k) {
    const num = n.toString(k);
    let answer = 0;
    let prime = '';
    
    function findPrime(num){
        const number = Number(num);
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
    
    for (let i = 0; i<num.length; i++){
        const char = num[i];
        
        if (char === '0'){
            if (prime !== ''){
                if (findPrime(prime)) answer ++;
                prime = '';
            }
        } else prime += char;
            
        
    }
    
    if(prime !== '' && findPrime(prime)) answer++;
    return answer;
}