// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let a = 0;
    let b = 1;
    let index = 1;

    if (n === 0) {
        return 0;
    }

    while (index < n) {
        a += b;
        index++;
        b += a;
        index++;
    }

    console.log("n: ", n, "index: ", index, "a: ", a, "b: ", b);
    if (index > n) {
        return a < b ? a : b;
    } else {
        return a > b ? a : b;
    }
}

module.exports = fib;
