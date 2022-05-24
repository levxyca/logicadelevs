# Lucian's Luscious Lasagna

## Instructions

Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!

In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.

You have four tasks related to the time spent cooking the lasagna.

1. **Define the expected oven time in minutes**
Define the ``EXPECTED_MINUTES_IN_OVEN`` constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is ``40``.
2. **Calculate the remaining oven time in minutes**
Implement the ``remainingMinutesInOven`` function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

    ```javascript
    remainingMinutesInOven(30);
    // => 10
    ```

3. **Calculate the preparation time in minutes**
Implement the ``preparationTimeInMinutes`` function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

    ```javascript
    preparationTimeInMinutes(2);
    // => 4
    ```

4. **Calculate the total working time in minutes**
Implement the ``totalTimeInMinutes`` function that takes two parameters: the ``numberOfLayers`` parameter is the number of layers you added to the lasagna, and the ``actualMinutesInOven`` parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

    ```javascript
    totalTimeInMinutes(3, 20);
    // => 26
    ```

## Introduction

JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

### (Re-)Assignment

There are a few primary ways to assign values to names in JavaScript - using variables or constants. On Exercism, variables are always written in **camelCase**; constants are written in **SCREAMING_SNAKE_CASE**. There is no official guide to follow, and various companies and organizations have various style guides. Feel free to write variables any way you like. The upside from writing them the way the exercises are prepared is that they'll be highlighted differently in the web interface and most IDEs.

Variables in JavaScript can be defined using the ``const``, ``let`` or ``var`` keyword.

A variable can reference different values over its lifetime when using ``let`` or ``var``. For example, ``myFirstVariable`` can be defined and redefined many times using the assignment operator =:

```javascript
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

In contrast to ``let`` and ``var``, variables that are defined with ``const`` can only be assigned once. This is used to define constants in JavaScript.

```javascript
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

### Function Declarations

In JavaScript, units of functionality are encapsulated in functions, usually grouping functions together in the same file if they belong together. These functions can take parameters (arguments), and can return a value using the ``return`` keyword. Functions are invoked using ``()`` syntax.

```javascript
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

### Exposing to Other Files

To make a ``function``, a constant, or a variable available in other files, they need to be **exported** using the ``export`` keyword. Another file may then **import** these using the ``import`` keyword. This is also known as the module system. A great example is how all the tests work. Each exercise has at least one file, for example ``lasagna.js``, which contains the implementation. Additionally there is at least one other file, for example ``lasagna.spec.js``, that contains the tests. This file imports the public (i.e. exported) entities in order to test the implementation:

```javascript
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```
