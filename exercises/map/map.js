/**
 * Constructs and returns a new array with`fn` to each element of `collection`.
 *
 * In general,
 *
 * ```
 * map([val1, val2, ..., valN], fn); // => [fn(val1), fn(val2), ..., fn(valN)]
 * ```
 *
 * @example
 * function double(x) {
 *   return x * 2;
 * }
 *
 * map([1, 2, 3, 4], double); // => [2, 4, 6, 8];
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns `true` or `false`
 * @returns {any[]} A new array constructed by applying `fn` to each
 *  element of `collection`
 */
function map(collection, fn) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  let results = [];

  for (let item of collection) {
    // This is your job. :)
  }

  return results;
}

if (require.main === module) {
  console.log('Running sanity checks for map:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = map;
