let num1 = 1112;
let num2 = 695;
let remainder;

do {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
} while (!remainder);

console.log(num2);
