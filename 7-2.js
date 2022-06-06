var BigNumber = require('big-number');
const n = 113;
const rn = [];
const rnRemainder = [];

for (let i = 0; i < 3; i++) {
    rn[i] = Math.floor(Math.random() * n);
    rnRemainder[i] = BigNumber(rn[i]).pow(n).mod(n);
}

console.log(rn);
console.log(rnRemainder.toString());
