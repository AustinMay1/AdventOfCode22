const fs = require("fs");

// Priorities:
// Lowercase: 1-26 (e.g. p = 16)
// Uppercase: 27-52 (e.g. L = 38)

// 'a'.charCodeAt(0) = 97. 97 - 96 = 1 ...bcdefg
// 'A'.charCodeAt(0) = 65. 65 - 38 = 27 ...BCDEFG
const calculatePri = (char) => char.charCodeAt(0) - (char === char.toLowerCase() ? 96 : 38);

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Need to split each line evenly
  // check for matching item types(by letter)
  // then assign priorities based on lowercase or uppercase
  // add up the sum of all priorities

  const rucksack = data.toString().split('\n').reduce((sum, compartment) => {
      const half = new Set(compartment.slice(compartment.length / 2, compartment.length));
      const match = [...compartment.slice(0, compartment.length / 2)].find(char => half.has(char));
      return sum += calculatePri(match);
  }, 0);

  console.log(rucksack);

});
