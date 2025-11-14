// ================================================
// Task:
// You get an array of numbers. Return the sum of
// all the positive numbers.
//
// Example:
//   [1, -4, 7, 12] => 1 + 7 + 12 = 20
//
// Note:
// If there are no positive numbers, return 0.
// ================================================


// ---------------------
// Solution 1:
// ---------------------
function positiveSum(arr) {
    let sum = 0;

    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }

    return sum;
}


// ---------------------
// Solution 2 (filter + reduce):
// ---------------------
function positiveSum(arr) {
    return arr
        .filter(num => num > 0)        // get only positive numbers
        .reduce((sum, current) => sum + current, 0); // sum them
}


// ---------------------
// Test
// ---------------------
console.log(positiveSum([1, -4, 7, 12]));    // 20
console.log(positiveSum([5, -4, 10, 15]));   // 30
console.log(positiveSum([-2, -9, -1]));      // 0
console.log(positiveSum([]));                // 0
