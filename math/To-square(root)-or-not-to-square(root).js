// Codewars Kata 8
// Task:
// Given an array of positive integers,
// return a new array where:
//
// - If the number has an integer square root, replace it with the square root
// - Otherwise, square the number
//
// Example:
// [4, 3, 9, 7, 2, 1] => [2, 9, 3, 49, 4, 1]
//
// Notes:
// - The input array will never be empty or null
// - The array contains only positive numbers

function squareOrSquareRoot(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            result.push(Math.sqrt(array[i]));
        } else {
            result.push(array[i] * array[i]);
        }
    }

    return result;
}

// ================================================
// Test
// ================================================
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2, 9, 3, 49, 4, 1]

