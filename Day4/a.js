const fs = require('fs');

const assignments = fs.readFileSync('./input.in', 'utf-8').toString()

// Check if either assignment pair is fully contained in the other
// e.g. 1-3, 2-3: 2-3 is fully contained inside 1-3.

console.log(assignments);