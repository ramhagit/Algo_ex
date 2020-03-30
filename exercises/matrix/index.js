// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const mtx = [];

     for (let i = 0; i < n; i++) {
        mtx.push([]);
    }

    let index = 1;
    let start_row = 0;
    let end_row = n - 1;
    let start_column = 0;
    let end_column = n - 1;

    while (start_row <= end_row && start_column <= end_column) {
        for (let column = start_column; column <= end_column; column++) {
            mtx[start_row][column] = index;
            index++;
        }
        start_row++;
        for (let row = start_row; row <= end_row; row++) {
            mtx[row][end_column] = index;
            index++;
        }
        end_column--;
        for (let column = end_column; column >= start_column; column--) {
            mtx[end_row][column] = index;
            index++;
        }
        end_row--;
        for (let row = end_row; row >= start_row; row--) {
            mtx[row][start_column] = index;
            index++;
        }
        start_column++;
    }

    return mtx;
}

module.exports = matrix;
