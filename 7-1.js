const euclideanAlgorithm = (n1, n2) => {
    // 두 수
    const remainder = n1 % n2; // mod 연산하여 나온 나머지
    if (!remainder) {
        // 나머지가 0일 경우 재귀 종료
        return console.log('최대공약수: ', n2);
    }
    // 나머지가 0이 아닐 경우 재귀
    return euclideanAlgorithm(n2, remainder);
};

euclideanAlgorithm(1112, 695);
