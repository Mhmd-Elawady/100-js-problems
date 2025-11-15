// ================================================
// Task:
// Sum all the numbers of a given array (list),
// except the highest and the lowest element (by value, not by index).
//
// Note:
// - The highest or lowest element is removed only by value.
// - If the array is empty, has 1 element, or is null, return 0.
//
// Example:
//   [6, 2, 1, 8, 10] => 16
//   [1, 1, 11, 2, 3] => 6
// ================================================


// ---------------------
// Solution:
// ---------------------
function sumArray(array) {
    if (array == null) return 0;

    let highest = Math.max(...array);
    let lowest = Math.min(...array);

    let filteredArray = array.filter(num => num !== highest && num !== lowest);

    let sum = filteredArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
}


// ---------------------
// Test
// ---------------------
console.log(sumArray([6, 2, 1, 8, 10]));       // 16
console.log(sumArray([1, 1, 11, 2, 3]));       // 6
console.log(sumArray([1,2,3,4,5,6,7,8,9]));    // 35
console.log(sumArray([10]));                   // 0
console.log(sumArray([]));                     // 0

