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
  for (row = 0; row <= n - 1; row++) {
    let matrix = "";
    for (column = 1; column <= n * 2 - 1; column++) {
      const left = n - row;
      const right = n + row;
      matrix += column >= left && column <= right ? "#" : " ";
    }
    console.log(matrix);
  }
}
module.exports = pyramid;
