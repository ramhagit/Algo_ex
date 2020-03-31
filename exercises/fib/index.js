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
    let flag = "";

    if (n === 0) {
        return 0;
    }

    // } else if (n === 1) {
    //     return 1;
    // }

    while (index < n) {
        a += b;
        flag = "a";
        index++;
        b += a;
        flag = "b";
        index++;
    }

    console.log("n: ", n, "index: ", index, "a: ", a, "b: ", b, "flag: ", flag)
    return flag === "a" ? a : b;
}

module.exports = fib;
