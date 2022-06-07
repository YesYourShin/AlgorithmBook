const fermatTest = n => {
    const BigNumber = require('big-number'); // 큰 수의 정확한 계산을 위한 라이브러리
    const rd = Math.floor(Math.random() * n); // 0 <= random < 113
    // n보다 작은 값을 mod 연산한 값
    const remainder = BigNumber(rd).pow(n).mod(n);
    return console.log(n + '보다 작은 랜덤 값:', rd, ', mod 연산 값:', remainder.toString());
};

fermatTest(561); // 숫자 입력
