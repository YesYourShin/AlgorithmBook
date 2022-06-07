const move = (n, start, to) => {
    console.log(`{${n}}번 원반을 {${start}}에서 {${to}}로 이동`);
    times++;
};

const hanoi = (n, start, to, index) => {
    if (n === 1) {
        return move(n, start, index); // 1번 원반일 경우 옮기기
    } else {
        hanoi(n - 1, start, index, to); // 2번 이상의 원반의 경우 -1 재귀
        move(n, start, index); // 작은 원반이 옮겨진 후 현재 원반 옮기기
        return hanoi(n - 1, to, start, index); // 작은 원반을 위에 얹기
    }
};

let times = 0;

hanoi(2, 'A', 'B', 'C');
console.log(times); // 원반이 옮겨진 횟수
