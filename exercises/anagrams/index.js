// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(string) {
  const str = string.toLowerCase().split("").toString();
  const regex = new RegExp(/[^a-z]/g);

  return str.replace(regex, "");
}

function anagrams(stringA, stringB) {
  const cleanA = cleanString(stringA).split("").sort().join("");
  const cleanB = cleanString(stringB).split("").sort().join("");

  return cleanA === cleanB;
}

module.exports = anagrams;

// function createHistogram(string) {
//   const obj = new Object();
//
//   for (const character of string) {
//     if (obj[character]) {
//       obj[character] += 1;
//     } else {
//       obj[character] = 1;
//     }
//   }
//   return obj;
// }
//
// function anagrams(stringA, stringB) {
//   const cleanA = cleanString(stringA).split("").sort().join("");
//   const cleanB = cleanString(stringB).split("").sort().join("");
//
//   if (cleanA.length !== cleanB.length) {
//     return false;
//   }
//
//   const histogramA = createHistogram(cleanA);
//   const histogramB = createHistogram(cleanB);
//
//   for (const element in histogramA) {
//     if (histogramA[element] !== histogramB[element]) {
//       return false;
//     }
//   }
//   return true;
