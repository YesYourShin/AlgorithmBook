let n,
    A = [],
    B = [],
    C = [],
    switchBtn,
    mod,
    count;

n = 2;

for (let i = 1; i <= n; i++) {
    A.push(i);
}
mod = A.length % 2;

while (A.length || B.length) {
    switch (mod) {
        case 0:
            switchBtn = C;
            break;
        case !0:
            switchBtn = B;
            break;
    }
    switchBtn.unshift(A[0]);
    A.shift[0];
}

console.log(A);
console.log(B);
console.log(C);
