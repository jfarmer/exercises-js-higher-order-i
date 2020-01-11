/**
 * Checks if `predicate` returns `true` for **any** element of `collection`.
 *
 * @example
 * some([1, 2, 3, 4, 5, 6], isEven); // => true
 * some([2, 4, 6, 8], isEven);       // => true
 * some([1, 3, 5], evenEven);        // => false
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {boolean} Returns `true` if `predicate` is `true` for any
 *  element of `collection` and `false` otherwise.
 */
function some(collection, predicate) {
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for some:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = some;
