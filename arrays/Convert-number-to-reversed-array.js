// ================================================
// Task:
// Given a non-negative number, return its digits
// inside an array in reverse order.
//
// Example:
//   35231 => [1, 3, 2, 5, 3]
//   0     => [0]
// ================================================


// ---------------------
// Solution 1 (String + split + reverse + map):
// ---------------------
function digitize(n) { 
    return String(n).split("").reverse().map(Number);
}


// ---------------------
// Solution 2 (loop):
// ---------------------
function digitize(n) {
    let result = [];
    while (n > 0) {
        result.push(n % 10); 
        n = Math.floor(n / 10);
    }

    if (result.length === 0) return [0]; 
    return result;
}


// ---------------------
// Test
// ---------------------
console.log(digitize(35231)); // [ 1, 3, 2, 5, 3 ]
console.log(digitize(0));     // [0]
