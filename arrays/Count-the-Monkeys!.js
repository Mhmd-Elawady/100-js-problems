// Codewars Kata 8
// Task:
// Given a number n, return an array containing all numbers
// from 1 up to and including n (excluding zero).
//
// Examples:
// 10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1  => [1]

function monkeyCount(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        result.push(i);
    }

    return result;
}

// ================================================
// Test
// ================================================
console.log(monkeyCount(10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(monkeyCount(1));  // [1]