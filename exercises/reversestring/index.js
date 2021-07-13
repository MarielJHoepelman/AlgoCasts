// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let solutionString = "";
  for (const character of str) {
    solutionString = character + solutionString;
  }
  return solutionString;
}

module.exports = reverse;

//let solutionString = "";
// with for loop
// for (let i = 0; i < str.length; i++) {
//   solutionString += str[str.length - 1 - i];
// }

// with reverse()
//split convers string to array. reverse reverses the array. join converts array back to string.
// return str.split("").reverse().join("");

//with REDUCE without implicit return
//   let arr = str.split("");
//   return arr.reduce((acc, element) => {
//     return element + acc;
//   }, "");
