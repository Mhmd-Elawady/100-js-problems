// ================================================
// Task:
// Write a function that takes a non-negative integer n
// and a string s, and returns the string repeated n times.
//
// Example:
//   repeatStr(6, "I")     => "IIIIII"
//   repeatStr(5, "Hello") => "HelloHelloHelloHelloHello"
// ================================================


// ---------------------
// Solution 1:
// ---------------------
function repeatStr(n, s) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += s;
    }

    return result;
}


// ---------------------
// Solution 2 :
// ---------------------
function repeatStr(n, s) {
    return s.repeat(n);
}


// ---------------------
// Test
// ---------------------
console.log(repeatStr(6, "I"));       // "IIIIII"
console.log(repeatStr(5, "Hello"));   // "HelloHelloHelloHelloHello"
