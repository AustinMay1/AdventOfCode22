const fs = require("fs");

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
  
  let topThree = 0;

  for(let i = 0; i < 3; i++) {
    console.log(calories[i]);
    topThree += calories[i];
  }

  console.log(topThree);
});
