function operatorBasedCalc(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid Operator';
    }
};

function calculator() {
    var num1 = 10;
    const num2 = 5;
    const operator = '-';

    const result = operatorBasedCalc(num1, num2, operator);

    return result;
};

const result = calculator();

console.log({
    result
})