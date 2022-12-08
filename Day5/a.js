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
      })
  });

// console.log(crane);

// Move crates (letters) around iaw instructions
// e.g. move 1 from 2 to 1 = stacks[2].pop() then stacks[1].push(valueFromPop);

const stacks = {
  1: ['q','w','p','s','z','r','h','d'],
  2: ['v','b','r','w','q','h','f'],
  3: ['c','v','s','h'],
  4: ['h','f','g'],
  5: ['p','g','j','b','z'],
  6: ['q','t','j','h','w','f','l'],
  7: ['z','t','w','d','l','v','j','n'],
  8: ['d','t','z','c','j','g','h','f'],
  9: ['w','p','v','m','b','h']
};

// go through each instruction and execute pop(amount) from, push(valueOfPop) to
function crateMover9000() {
  for(const x of crane) {
    for(let i = 0; i < x[0]; i++) {
      const crate = stacks[x[1]].pop();
      stacks[x[2]].push(crate);
    }
  }
  console.log(stacks);
}

crateMover9000();






