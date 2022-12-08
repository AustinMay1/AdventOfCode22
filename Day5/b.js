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

// console.log(crane);

// Move crates (letters) around iaw instructions, can now be multiple at a time
// e.g. move 1 from 2 to 1 = stacks[2].pop() then stacks[1].push(valueFromPop);

const stacks = {
  1: ["q", "w", "p", "s", "z", "r", "h", "d"],
  2: ["v", "b", "r", "w", "q", "h", "f"],
  3: ["c", "v", "s", "h"],
  4: ["h", "f", "g"],
  5: ["p", "g", "j", "b", "z"],
  6: ["q", "t", "j", "h", "w", "f", "l"],
  7: ["z", "t", "w", "d", "l", "v", "j", "n"],
  8: ["d", "t", "z", "c", "j", "g", "h", "f"],
  9: ["w", "p", "v", "m", "b", "h"],
};


function crateMover9001() {
    for(const x of crane) {
        const crates = stacks[x[1]].splice(-x[0], x[0]);
        stacks[x[2]] = stacks[x[2]].concat(crates);
    }
    console.log(stacks);
}

crateMover9001();

