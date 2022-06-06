const move = (n, start, to) => {
    console.log(`{${n}}번 원반을 {${start}}에서 {${to}}로 이동`);
    times++;
};

const hanoi = (n, start, to, index) => {
    if (n === 1) {
        move(n, start, index);
    } else {
        hanoi(n - 1, start, index, to);
        move(n, start, index);
        hanoi(n - 1, to, start, index);
    }
};

const disc = 3;
let times = 0;

hanoi(disc, 'A', 'B', 'C');
console.log(times);
