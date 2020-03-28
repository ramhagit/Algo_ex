// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }

    if (stair.length === (n-1)*2 + 1) {
        console.log(stair);
        return pyramid(n, row +1);
    }

    const add = (stair.length >= n-1 - row && stair.length <= n-1 + row) ? '#' : ' ' ;

    stair += add;
    pyramid(n, row, stair);
}

module.exports = pyramid;

// function pyramid(n) {
//     const colSize = (n-1)*2 + 1;
//
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//
//         for (let column = 0; column < colSize; column++) {
//
//             if (column >= n - 1 - row && column <= n - 1 + row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//
//         console.log(stair);
//     }
// }