// Problem: Create a function that takes an integer and returns 
// "Even" for even numbers and "Odd" for odd numbers.



// Solution:
function evenOrodd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}



// Short Solution 
// const evenOrodd = number => (number % 2 === 0 ? "Even" : "Odd");


// Test:
console.log(evenOrodd(2));  // Even
console.log(evenOrodd(7));  // Odd

