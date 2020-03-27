// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }

    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//         let res = '';
//         for (let j = 0; j <= i ; j++) {
//             res += '#';
//          }
//         for (let j = 0; j < n-1-i; j++) {
//             res += ' ';
//         }
//         console.log(res)
//     }
// }

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//         let row = '';
//         for (let j = 0; j < n; j++) {
//             row += (j <= i) ? '#' : ' ' ;
//         }
//         console.log(row);
//     }
// }

// function steps(n, index = 0) {
//     if (row === n) {
//         return;
//     }
//
//     let row = '';
//
//      while (row.length < n) {
//         row += (row.length -1 < index) ? '#' : ' ' ;
//     }
//
//     console.log(row);
//     steps(n, index + 1);
// }

// function printRow(index, n) {
//     if (index === n) {
//         return;
//     }
//
//     let row = '';
//
//     while (row.length < n) {
//         row += (row.length -1 < index) ? '#' : ' ' ;
//     }
//
//     console.log(row);
//     printRow(index + 1, n);
// }