// ================================================
// Task:
// Given a number, return its negative version.
// If the number is already negative or zero, return it as is.
//
// Examples:
//   makeNegative(1)    => -1
//   makeNegative(-5)   => -5
//   makeNegative(0)    => 0
//   makeNegative(0.12) => -0.12
// ================================================


// ---------------------
// Solution 1: 
// ---------------------
function makeNegativeIf(num) {
    if (num > 0) {
        return -num; // convert positive to negative
    } else {
        return num;  // keep negative numbers or zero
    }
}


// ---------------------
// Solution 2: Using Math.abs (shorter)
// ---------------------
function makeNegative(num) {
    return -Math.abs(num);
}


// ---------------------
// Test
// ---------------------
console.log(makeNegativeIf(1));    // -1
console.log(makeNegativeIf(-5));   // -5
console.log(makeNegativeIf(0));    // 0
console.log(makeNegativeIf(0.12)); // -0.12

console.log(makeNegative(1));    // -1
console.log(makeNegative(-5));   // -5
console.log(makeNegative(0));    // 0
console.log(makeNegative(0.12)); // -0.12