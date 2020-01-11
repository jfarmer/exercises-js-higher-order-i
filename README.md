# Higher-Order Functions in JavaScript

## Contents <!-- omit in toc -->

- [Functions Are Values](#functions-are-values)
- [Generalizing With Higher-Order Functions](#generalizing-with-higher-order-functions)
- [Passing Functions As Arguments](#passing-functions-as-arguments)
- [Exercises](#exercises)

## Functions Are Values

JavaScript has [first-class functions][mdn-first-class-function]. This means that functions are a value like any other value: `5`, `'apples'`, `true`, etc. They can be assigned to variables and passed to other functions.

Consider the following snippet:

```javascript
function isPositive(num) {
  return num > 0;
}

let copyOfIsPositive = isPositive;

copyOfIsPositive(-10); // => false
copyOfIsPositive(0); // => true
copyOfIsPositive(10); // => true
```

We we create a new variable called `copyOfIsPositive` whose *value* is the function `isPositive`. We can call `copyOfIsPositive(num)` and JavaScript will know to call `isPositive`.

A *higher-order function* is a function that accepts another function as an argument. Let's see what we can do with this feature.

## Generalizing With Higher-Order Functions

Here are three functions that take a list of numbers and count how many elements match a particular condition. Notice that the code in each example is almost identical.

1. `countPositive(array)` returns the count of positive numbers in `array`:

   ```javascript
   function isPositive(num) {
     return num > 0;
   }

   function countPositive(array) {
     let total = 0;

     for(let item of array) {
       if (isPositive(item)) {
         total += 1;
       }
     }

     return total;
   }
   ```

1. `countEven(array)` returns the count of even numbers in `array`:

   ```javascript
   function isEven(num) {
     return num % 2 === 0;
   }

   function countEven(array) {
     let total = 0;

     for(let item of array) {
       if (isEven(item)) {
         total += 1;
       }
     }

     return total;
   }
   ```

1. `countPrimes(array)` returns the count of prime numbers in `array`, assuming we have a working function `isPrime` defined elsewhere:

   ```javascript
   function countPrimes(array) {
     let total = 0;

     for(let item of array) {
       if (isPrime(item)) {
         total += 1;
       }
     }

     return total;
   }
   ```

The code for each function is _very_ similar. The only part that is the logic we use to decide whether to count a particular element or not: `if (someCondition(item)) { ... }`.

On top of that, `someCondition` is the only part of each function that even cares whether the elements are numbers or not. Say we defined `isNotEmpty(string)` that tells us whether a string was empty or not, like so:

```javascript
function isNotEmpty(string) {
  return string !== '';
}
```

If we replaced `someCondition(item)` with `isNotEmpty(item)` then we'd have a function that counted the number of non-empty strings in an array.

## Passing Functions As Arguments

Consider the following, where `isPositive`, `isEven`, and `isPrime` are defined elsewhere:

```javascript
function count(array, someCondition) {
  let total = 0;

  for(let item of array) {
    if (someCondition(item)) {
      total += 1;
    }
  }

  return total;
}

let numbers = [-1, 0, 1, 2, 3, 4, 5, 6];

count(numbers, isPositive); // => 6
count(numbers, isEven); // => 4
count(numbers, isPrime); // => 3
```

Because functions are values like any other, we can pass them in as arguments. `count` expects only two things:

1. `array` is an array (but it doesn't assume anything about what it contains)
1. `someCondition` is a function that returns `true` or `false` for each element of `array`

This allows us to write a single `count` function that works in virtually any context rather than a separate `count` function for every possible context.

## Exercises

1. [count](./exercises/count)
1. [select](./exercises/select)
1. [reject](./exercises/reject)
1. [findFirst](./exercises/findFirst)
1. [every](./exercises/every)
1. [some](./exercises/some)
1. [maxBy](./exercises/maxBy)
1. [minBy](./exercises/maxBy)
1. [map](./exercises/map)

[mdn-first-class-function]: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
[wiki-higher-order-function]: https://en.wikipedia.org/wiki/Higher-order_function
