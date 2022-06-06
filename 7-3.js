const teleportProbability = 0.15;
const linkProbability = 1 - teleportProbability;

let page = [0, 0, 0, 0];

const simulation = () => {
    const startPage = Math.floor(Math.random() * 4);

    start(startPage);
};

const start = startPage => {
    page[startPage] += 1;
    if (startPage === 3) {
        loop(1);
    } else {
        loop(startPage + 1);
    }
};

const loop = startPage => {
    page[startPage] += 1;
    let sum = 0;
    for (let times of page) {
        sum = sum + times;
    }
    if (sum === 1000) {
        return;
    } else {
        const probability = Math.random();
        if (probability <= 0.15) {
            simulation();
        } else {
            if (startPage === 3) {
                loop(1);
            } else {
                loop(startPage + 1);
            }
        }
    }
};

simulation();

const percentage = page.map(times => Math.round((times * 100) / 1000));
console.log(page);
console.log(percentage);
