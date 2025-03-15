let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const totalParticipants = Number(input[0]);
const shirtRequests = input[1].split(' ').map(Number);
const [T, P]  = input[2].split(' ').map(Number);

const minShirtBundles = shirtRequests.reduce((total, size) => Math.ceil(size / T) + total, 0)
const maxPenBundles = Math.floor(totalParticipants / P);
const singlePens = totalParticipants % P;

console.log(`${minShirtBundles}
${maxPenBundles} ${singlePens}`)