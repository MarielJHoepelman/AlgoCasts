// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

// function fib(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//
//   let arr = [0, 1];
//   let i = 0;
//   while (i <= n) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     i++;
//   }
//   return arr[n];
// }
