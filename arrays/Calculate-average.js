// Codewars Kata 8
// Task:
// Write a function that calculates the average of numbers in an array.
//
// Notes:
// - If the array is empty, return 0
//
// Examples:
// [1, 2, 3] => 2
// []        => 0

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

// ================================================
// Test
// ================================================
console.log(findAverage([1, 5, 2, 6])); // 3.5
console.log(findAverage([]));           // 0