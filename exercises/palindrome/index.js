// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str === str.split("").reverse().join("");
}

module.exports = palindrome;

//with loop
// function palindrome(str) {
//   let reversed = "";
//
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed === str;
// }

//can be solve with every() but it will compare twice the necessary amount of comparisons.
