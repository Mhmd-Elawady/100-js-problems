// In this task, you are given an array full of junk
// There is exactly one "needle" hidden inside
// You have to return a message indicating the index of the needle

// Examples:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
// => "found the needle at position 5"

function findNeedle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}
// ================================================
// Test
// ================================================
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]),
); // "found the needle at position 5"
