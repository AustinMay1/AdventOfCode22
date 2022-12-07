const fs = require("fs");
const assignments = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .trim()
  .split("\n");
// Find pairs that overlap.
// e.g. [5-7,7-9] = 5,6,7,8,9 || [2-8,3-7] = 2,3,4,5,6,7,8

const pairs = assignments.map((pair) => {
  const [first, second] = pair
    .split(",")
    .map((iv) => iv.split("-").map(Number))
    .sort((a, b) => {
      const one = a[1] - a[0];
      const two = b[1] - b[0];
      return two - one;
    });

    const overlap = first[1] >= second[0] && second[1] >= first[0];

    return overlap ? 1 : 0;
});

console.log(pairs.reduce((a,b) => a + b, 0));

