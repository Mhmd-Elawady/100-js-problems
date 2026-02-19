// Codewars Kata 8
// Task:
// Create a function that performs basic mathematical operations.
//
// The function takes:
// - operation (string / char): "+", "-", "*", "/"
// - value1 (number)
// - value2 (number)
//
// It should return the result after applying the operation.
//
// Examples:
// ('+', 4, 7)  => 11
// ('-', 15, 18) => -3
// ('*', 5, 5)  => 25
// ('/', 49, 7) => 7

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return null;
    }
}

// ================================================
// Test
// ================================================
console.log(basicOp('+', 4, 7));   // 11
console.log(basicOp('-', 15, 18)); // -3
console.log(basicOp('*', 5, 5));   // 25
console.log(basicOp('/', 49, 7));  // 7
