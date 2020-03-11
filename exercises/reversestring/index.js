// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rvs = "";
    for (let i = 1; i < str.length + 1 ; i++) {
        rvs += str.substr(-1*i, 1);
    }

    return rvs;
}

// console.log(reverse("apple"));

module.exports = reverse;
