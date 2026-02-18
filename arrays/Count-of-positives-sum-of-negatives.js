// Codewars Kata 8
// Task:
// Given an array of integers.
//
// Return an array where:
// - The first element is the count of positive numbers
// - The second element is the sum of negative numbers
//
// Notes:
// - 0 is neither positive nor negative
// - If the input is null or empty, return an empty array
//
// Example:
// [1, 2, 3, -1, -2] => [3, -3]

// ---------------------
// Solution 1 (Loop):
// ---------------------
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    let countPositives = 0;
    let sumNegatives = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countPositives++;
        } else if (input[i] < 0) {
            sumNegatives += input[i];
        }
    }

    return [countPositives, sumNegatives];
}

// ---------------------
// Solution 2 (filter + reduce):
// ---------------------
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    const countPositives = input.filter(x => x > 0).length;
    const sumNegatives = input
        .filter(x => x < 0)
        .reduce((acc, curr) => acc + curr, 0);

    return [countPositives, sumNegatives];
}

// ---------------------
// Test
// ---------------------
console.log(
    countPositivesSumNegatives([
        1, 2, 3, 4, 5,
        -1, -2, -3
    ])
); // [5, -6]

console.log(countPositivesSumNegatives([]));   // []
console.log(countPositivesSumNegatives(null)); // []










