// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const rawA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    const rawB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

    return rawA === rawB;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const strAobj = {};
//     const numLettersA = stringA.toLowerCase().match(/[a-z]/g).length;
//     const numLettersB = stringB.toLowerCase().match(/[a-z]/g).length;
//
//     if (numLettersA !== numLettersB) {return false;}
//
//     for (let charA of stringA) {
//         const chrA = charA.toLowerCase();
//         if (chrA >= 'a' && chrA <= 'z') {
//             if (Object.keys(strAobj).includes(chrA)) {
//                 strAobj[chrA]++;
//             } else {
//                 strAobj[chrA] = 1;
//             }
//         }
//     }
//
//     for (let key in strAobj) {
//         const reg = new RegExp(key, 'g');
//         const howMany = stringB.toLowerCase().match(reg).length;
//         console.log('howMany: ', howMany);
//         if (howMany !== strAobj[key]) {
//             return false;
//         }
//     }
//
//     return true;
// }

// function anagrams(stringA, stringB) {
//     const rawA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const rawB = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//     if (rawA.length !== rawB.length) {
//         return false;
//     }
//
//     for (let letter of rawA) {
//         const reg = new RegExp(letter, 'g');
//
//         if (rawA.match(reg).length !== rawB.match(reg).length) {
//             return false;
//         }
//
//         return true;
//     }
// }