// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};

    for (const char of str) {
        if (Object.keys(obj).includes(char)) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    let max_char = Object.keys(obj)[0];

    for (const key of Object.keys(obj)) {
        if (obj[key] > obj[max_char]) {
            max_char = key;
        }
    }

    return max_char;
}

module.exports = maxChar;
