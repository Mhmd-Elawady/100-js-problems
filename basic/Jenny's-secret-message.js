// ================================================
// Task:
// Jenny has written a function that returns a greeting for a user.
// But she wants to greet "Johnny" differently.
//
// Examples:
//   greet("Johnny") => "Hello, my love!"
//   greet("Alice")  => "Hello, Alice!"
// ================================================


// ---------------------
// Solution 1: 
// ---------------------
function greetIf(name) {
    if (name === "Johnny") {
        return "Hello, my love!"; 
    } else {
        return "Hello, " + name + "!"; 
    }
}


// ---------------------
// Solution 2:
// ---------------------
function greet(name) {
    return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}


// ---------------------
// Test
// ---------------------
console.log(greetIf("Johnny")); // "Hello, my love!"
console.log(greetIf("Alice"));  // "Hello, Alice!"
console.log(greetIf("Bob"));    // "Hello, Bob!"

