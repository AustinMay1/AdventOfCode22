const fs = require("fs");

const assignments = fs.readFileSync("./input.txt", "utf-8");

// Check if either assignment pair is fully contained in the other
// e.g. 1-3, 2-3: 2-3 is fully contained inside 1-3.

// Break down each line into 4 seperate values, convert from string to Number
// e.g. 28-88, 85-88 => [ 28, 88, 85, 88 ]
const pairs = assignments
  .split("\n")
  .map((pair) => {
    return pair.replace("-", ",").trim();
  })
  .map((range) => {
    return range.replace("-", ",").split(",").map(Number);
  });

console.log(pairs);

const inRange = (low, num, high, inclusive) => {
  inclusive = typeof inclusive === "undefined" ? false : inclusive;
  if (inclusive && num >= low && num <= high) return true;
  if (num > low && num < high) return true;
  return false;
};

let overlapPairs = 0;

// Determine if either set of numbers is fully contained in the other. Brute force method
for (let i = 0; i < pairs.length; i++) {
  if (
    (inRange(pairs[i][0], pairs[i][2], pairs[i][1], true) &&
      inRange(pairs[i][0], pairs[i][3], pairs[i][1], true)) ||
    (inRange(pairs[i][2], pairs[i][0], pairs[i][3], true) &&
      inRange(pairs[i][2], pairs[i][1], pairs[i][3], true))
  ) {
    overlapPairs += 1;
  }
}
console.log(overlapPairs);
//console.log(pairs[0][0]));
