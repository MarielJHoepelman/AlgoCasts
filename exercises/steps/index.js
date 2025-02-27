// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
//
function steps(n) {
  for (i = 1; i <= n; i++) {
    let print = "";
    for (j = 1; j <= n; j++) {
      // j <= i ? (shape += "#") : (shape += " ");
      print += j <= i ? "#" : " ";
    }
    console.log(print);
  }
}
module.exports = steps;

//create a metrix
// i creates the rows
// j the columns

//with recursion

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }
//
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
//
//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }
