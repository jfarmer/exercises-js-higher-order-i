/**
 * Given an array and a function, returns the number of elements in array
 * for which the returns true.
 *
 * @example
 * count([1, 2, 3, 4, 5, 6], isEven); // => 3
 *
 * @param {any[]} collection - An array whose elements we want to count
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {number} The number of elements in `collection` for which `predicate`
 *  returns `true`
 */
function count(collection, predicate) {
  let total = 0;

  for (let item of collection) {
    if (predicate(item)) {
      total += 1;
    }
  }

  return total;
}

if (require.main === module) {
  console.log('Running sanity checks for count:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = count;
