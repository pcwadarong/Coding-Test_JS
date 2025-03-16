const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString().trim().split('\n').slice(1);

const members = input.map((el, i) => {
    const [age, name] = el.split(' ');
    return {index: i, age: Number(age), name};
});
members.sort((a, b) => a.age - b.age || a.index - b.index);

console.log(members.map(({age, name}) => `${age} ${name}`).join('\n'));