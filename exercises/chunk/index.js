// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunk_arr = [];
    const sub_arr = array.length / size;
    let index = 0;
    for (let i = 0; i < sub_arr; i++) {
        chunk_arr.push([]);
        for (let j = 0; j < size; j++) {
            if (index < array.length) {
                chunk_arr[i].push(array[index]);
                index++;
            }
        }
    }
    return chunk_arr;
}

module.exports = chunk;
