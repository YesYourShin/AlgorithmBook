// 등록된 페이지
const page = [0, 0, 0, 0];

const simulation = () => {
    // 처음 시작할 페이지
    const startPage = Math.floor(Math.random() * 4);
    return start(startPage);
};

const start = startPage => {
    // 입장한 페이지 스코어 업
    page[startPage] += 1;
    if (startPage === 3) {
        // 루프할 수 있도록 다른 페이지 연결
        return loop(1);
    } else {
        // 다음 페이지로
        return loop(startPage + 1);
    }
};

const loop = startPage => {
    // 입장한 페이지 스코어 업
    page[startPage] += 1;
    // 1000회 시뮬을 위한 페이지 스코어 합산 확인
    let sum = 0;
    for (let times of page) {
        sum = sum + times;
    }
    if (sum === 1000) {
        // 1000회일 경우 스톱
        return;
    } else {
        const probability = Math.random();
        if (probability <= 0.15) {
            // 15% 확률로 텔레포트
            return simulation();
        } else {
            if (startPage === 3) {
                // 루프할 수 있도록 다른 페이지 연결
                return loop(1);
            } else {
                // 다음 페이지로
                return loop(startPage + 1);
            }
        }
    }
};

simulation();

// 비율로 바꾸기
const percentage = page.map(times => Math.round((times * 100) / 1000));

console.log(page);
console.log(percentage);
