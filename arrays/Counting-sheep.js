// ================================================
// Task:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// ================================================

/* ---------------------
Solution  (for loop)
--------------------- */
function countSheeps(sheepArray) {
  let count = 0;
  for (let sheep of sheepArray) {
    if (sheep === true) {
      count += 1;
    }
  }
  return count;
}

// ---------------------
// Test
// ---------------------
const sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
];

console.log(countSheeps(sheeps)); // 9
