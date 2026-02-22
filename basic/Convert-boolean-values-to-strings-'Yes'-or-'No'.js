// Codewars Kata 8
// Task:
// Create a function that takes a boolean value
// and returns "Yes" for true or "No" for false.
//
// Examples:
// true  => "Yes"
// false => "No"

function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

// ================================================
// Test
// ================================================
console.log(boolToWord(true));  // "Yes"
console.log(boolToWord(false)); // "No"