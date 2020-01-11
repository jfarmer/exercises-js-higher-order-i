# Count

Write a function `count` that takes an array and a predicate function as input and returns the number of elements in the array for which the function returns `true`.

## Examples

Assume `isPositive`, `isEven`, and `isPrime` have been defined elsewhere but do what their names suggests.

```javascript
let numbers = [-1, 0, 1, 2, 3, 4, 5, 6];

count(numbers, isPositive); // => 6 since 1,2,3,4,5,6 are positive
count(numbers, isEven);     // => 4 since 0,2,4,6 are even
count(numbers, isPrime);    // => 3 since 2,3,5 are prime

function longerThanFive(str) {
  return str.length > 5;
}

count(['one', 'two', 'apples', 'abcdefg', 'four'], longerThanFive); // => 2
```
