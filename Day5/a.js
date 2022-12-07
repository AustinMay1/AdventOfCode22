const fs = require("fs");

// Break down instructions into an array of numbers 
// a[0] = amount, a[1] = stack from, a[2] = stack to
const crane = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n")
  .map((line) => {
    return line
      .split(" ")
      .map(Number)
      .filter((num) => {
        if (num != NaN) return num;
      });
  });

console.log(crane);

// Move crates (letters) around iaw instructions
// e.g. move 1 from 2 to 1 = stacks[2].pop() then stacks[1].push(valueFromPop);

const stacks = {
  1: ["z", "n"],
  2: ["m", "c", "d"],
  3: ["p"],
};

// [1,2,1]
let from = stacks[2].pop();
stacks[1].push(from);
console.log(stacks[1]);


