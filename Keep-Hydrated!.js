// Codewars Kata 8
// Task:
// Nathan drinks 0.5 litres of water per hour of cycling.
// Given the time in hours, return the number of litres Nathan will drink,
// rounded down to the nearest whole number.
//
// Examples:
// time = 3   => litres = 1
// time = 6.7 => litres = 3
// time = 11.8=> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
}

// ================================================
// Test
// ================================================
console.log(litres(3));    // 1
