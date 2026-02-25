// Codewars Kata 8
// Task:
// Write a function that takes an array of words
// and smashes them together into a sentence.
//
// Notes:
// - Words are separated by a single space
// - No space at the beginning or end of the sentence
//
// Example:
// ['hello', 'world', 'this', 'is', 'great']
// => 'hello world this is great'

function smash(words) {
    return words.join(" ");
}

// ================================================
// Test
// ================================================
console.log(smash(["hello", "my", "name", "is", "Elawady"]));
// Output: "hello my name is ahmed"