const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim();

function isUnique(x) {
  return new Set(x).size === x.length;
}

let subroutine = [];

for (let i = 0; i < input.length; i++) {
  subroutine.push(input[i]);
  if (subroutine.length > 14) {
    subroutine.shift();
  }
  if (subroutine.length === 14 && isUnique(subroutine)) {
    console.log(i + 1);
    break;
  }
}
