const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach(e => {
        if (e === e.toUpperCase()) output += e.toLowerCase();
        else output += e.toUpperCase();
    })
    console.log(output);
});