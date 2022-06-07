const move = (n, start, to) => {
    console.log(`{${n}}번 원반을 {${start}}에서 {${to}}로 이동`);
    times++;
};

const hanoi = (n, start, to, index) => {
    if (n === 1) {
        return move(n, start, index);
    } else {
        hanoi(n - 1, start, index, to);
        move(n, start, index);
        return hanoi(n - 1, to, start, index);
    }
};

const disc = 4;
let times = 0;

hanoi(disc, 'A', 'B', 'C');
console.log(times);
