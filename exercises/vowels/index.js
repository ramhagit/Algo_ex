// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0;

    for (let char of str) {
        counter += ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(char) ? 1 : 0 ;
    }

    return counter;
}

module.exports = vowels;
