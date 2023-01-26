function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    var result = num1 - num2;
    return result;
}

const sum = add(2, 2);
const sum2 = add(4, 2);

const sub = subtract(50, 30);
const sub2 = subtract(10, 2);

console.log({
    sum,
    sum2,


    sub,
    sub2
});
