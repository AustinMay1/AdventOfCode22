const fs = require("fs");

// readfile and convert to an object of arrays

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const calories = data.split("\n\n").map((elf) => {
    return elf
      .split("\n")
      .reduce((total, current) => total + Number(current.trim()), 0)
      
  });
  calories.sort((a, b) => b - a);
  console.log(calories);
});
