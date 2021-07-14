// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const interableNumber = n.toString();
  let solution;
  for (element of interableNumber) {
    solution = parseInt(element + solution);
  }
  return interableNumber[0] === "-" ? -Math.abs(solution) : solution;
}

module.exports = reverseInt;
//can also return solution * Math.sign(n)
