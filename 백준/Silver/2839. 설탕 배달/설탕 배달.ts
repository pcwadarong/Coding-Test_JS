const input = Number(require('fs').readFileSync("/dev/stdin").toString().trim());

let result = -1;

if (input >= 5){
    if (input % 5 === 0) {
        result = input / 5;
    } else {
        let maxY = Math.floor(input / 5);
        while (maxY >= 0){
            if ((input - 5 * maxY) % 3 === 0) {
                result = maxY + (input - 5 * maxY) / 3;
                break;
            }
            maxY --;
        }
    }
} else {
    if (input % 3 === 0) result = input / 3;  
}

console.log(result)