// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = new Object();
  let mostFrequent;
  let highestValue = 0;

  for (const element of str) {
    obj[element] ? (obj[element] += 1) : (obj[element] = 1);
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value > highestValue) {
      highestValue = value;
      mostFrequent = key;
    }
  }
  return mostFrequent;
}

module.exports = maxChar;

//with for in loop
// for (let element in obj) {
//   if (obj[element] > highestValue) {
//     highestValue = obj[element];
//     mostFrequent = element;
//   }
// }
