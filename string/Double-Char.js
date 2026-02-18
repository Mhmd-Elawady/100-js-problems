// Codewars Kata 8
// Task:
// Given a string, return a new string
// where each character is repeated once (case-sensitive).

// Examples:
// "String"      => "SSttrriinngg"
// "Hello World" => "HHeelllloo  WWoorrlldd"
// "1234!_ "     => "11223344!!__  "

function doubleChar(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

// ================================================
// Test
// ================================================
console.log(doubleChar("String"));       // "SSttrriinngg"
console.log(doubleChar("Hello World"));  // "HHeelllloo  WWoorrlldd"

