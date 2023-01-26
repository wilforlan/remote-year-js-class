var name = "Joe";

var surname;


if (name === 'Tolani') {
    surname = "Akinola";
} else if (name === 'Isaac') {
    surname = "Williams";
} else {
    surname = "Someone"
}


// const x = 13;

// var y;
// if(x === 10) {
//     y = 20;
// } 
// else if (x === 11) {
//     y = 21;
// } 
// else if (x === 12) {
//     y = 22;
// }
// else if (x === 13) {
//     y = 23;
// }
// else if (x === 14) {
//     y = 24;
// }
// else if (x === 15) {
//     y = 25;
// } else {
//     y = 0
// }

// console.log({
//     y
// });

const x = 13;

switch (x) {
    case 10:
        y = 20;
        break;
    case 11:
        y = 21;
        break;
    case 12:
        y = 22;
        break;
    case 13:
        y = 23;
        break;
    default:
        y = 0
        break;
}

console.log({
    y
});