// Codewars Kata 8
// Task:
// Complete the function so that it reverses all the words in a string.
//
// Notes:
// - Words are separated by exactly one space
// - No leading or trailing spaces
//
// Examples:
// "The greatest victory is that which requires no battle"
// => "battle no requires which that is victory greatest The"

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// ================================================
// Test
// ================================================
console.log(reverseWords("hello world")); 
// Output: "world hello"
