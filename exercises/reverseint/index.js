// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let rev = 0;
    let num = n;
    while (num) {
        debugger;
        rev = rev * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return rev;
}

// reverseInt(15);

module.exports = reverseInt;

// function reverseInt(n) {
//     return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
// }

// function reverseInt(n) {
//     let rev = 0;
//     while (n) {
//         debugger;
//         rev = rev*10 + (n%10);
//         n = Math.floor(n/10);
//     }
//     return rev;
// }