// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

module.exports = vowels;

// return str.match(/[aeiou]/gi)?.length || 0;
// is same as below:
// const regex = /[aeiou]/gi;
// const vowels = str.match(regex) || [];
// return vowels.length;
//wouldn't create memory refs or exec contexts for the variables regex and vowels.

// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let counter = 0;
//   for (const letter of str) {
//     if (vowels.includes(letter.toLowerCase())) {
//       counter += 1;
//     }
//   }
//   return counter;
// }
