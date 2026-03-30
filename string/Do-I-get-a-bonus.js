// =====================================================
// Task:
// Calculate the total pay of an employee based on salary
// and whether they get a bonus. If bonus is true, salary
// is multiplied by 10, otherwise salary stays the same.
// =====================================================


// -----------------------------------------------------
// Solution
// -----------------------------------------------------

function bonusTime(salary, bonus) {
    return '£' + (bonus ? salary * 10 : salary);
}


// -----------------------------------------------------
// Test Cases
// -----------------------------------------------------
console.log(bonusTime(10000, true));  // "£100000"
console.log(bonusTime(25000, false)); // "£25000"
