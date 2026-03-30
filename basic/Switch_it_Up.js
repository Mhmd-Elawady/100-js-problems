// =====================================================
// Task:
// Convert a number (0–9) into its word representation.
// The input is guaranteed to be between 0 and 9.
//
// Examples:
//   switchup(1) => "One"
//   switchup(5) => "Five"
// =====================================================


// -----------------------------------------------------
// Solution: Using switch statement
// -----------------------------------------------------
/**
 * Returns the word equivalent of a number between 0 and 9.
 * @param {number} number - A number between 0 and 9.
 * @returns {string} The word representation of the number.
 */
function switchup(number) {
    switch (number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return 'Invalid number';
    }
}


// -----------------------------------------------------
// Test Cases
// -----------------------------------------------------
console.log(switchup(5)); // "Five"
console.log(switchup(9)); // "Nine"
console.log(switchup(10)); // "Invalid number"