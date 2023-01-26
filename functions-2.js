function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

function AddandSubtract(num1, num2, num3) {
    const result = add(num1, num2) - num3;
    return result;
}

const finalResults = AddandSubtract(10, 5, 4);

console.log({
    finalResults
});