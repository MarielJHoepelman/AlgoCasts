// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//    #
//   ###
//  #####
// #######
function pyramid(n) {
  for (row = 0; row < n; row++) {
    let matrix = "";
    for (column = 0; column < n * 2 - 1; column++) {
      const left = n - row - 1;
      const right = n + row - 1;
      matrix += column >= left && column <= right ? "#" : " ";
    }
    console.log(matrix);
  }
}

module.exports = pyramid;

// Stephen's solution
// function pyramid(n) {
//   // const mid = Math.floor((2 * n - 1) / 2);
// why use Math floor if sol is always n - 1????
//   const mid = n - 1;
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
