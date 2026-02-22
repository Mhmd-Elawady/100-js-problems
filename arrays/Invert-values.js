// Codewars Kata 8
// Task:
// Given an array of numbers, return a new array
// where each number is inverted (multiplied by -1).
//
// Examples:
// [-1, 2, -3] => [1, -2, 3]
// [0, 4, -5]  => [0, -4, 5]

// ---------------------
// Solution 1 (Loop):
// ---------------------
function invert(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i]);
    }
    return result;
}

// ---------------------
// Solution 2 (Map):
// ---------------------
const invertMap = array => array.map(num => -num);

// ================================================
// Test
// ================================================
console.log(invert([-4, 5, 9, 7, -9, -2, -3]));      // [4, -5, -9, -7, 9, 2, 3]
console.log(invertMap([-4, 5, 9, 7, -9, -2, -3]));   // [4, -5, -9, -7, 9, 2, 3]
