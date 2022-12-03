const fs = require("fs");

// A = Rock       X = Lose
// B = Paper      Y = Draw
// C = Scissors   Z = Win
//
// Rock = 1
// Paper = 2
// Scissors = 3
//
// Win = 6
// Draw = 3
// Loss = 0

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.err(err);
    return;
  }

  const games = data.split("\n").map((plays) => {
    return plays.trim("").split(" ");
  });

  let totalScore = 0;

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] === "A" && games[i][1] === "X") {
      totalScore += 3; // 3 + 0
    } else if (games[i][0] === "A" && games[i][1] === "Y") {
      totalScore += 4; // 1 + 3
    } else if (games[i][0] === "A" && games[i][1] === "Z") {
      totalScore += 8; // 2 + 6
    } else if (games[i][0] === "B" && games[i][1] === "X") {
      totalScore += 1; // 1 + 0
    } else if (games[i][0] === "B" && games[i][1] === "Y") {
      totalScore += 5; // 2 + 3
    } else if (games[i][0] === "B" && games[i][1] === "Z") {
      totalScore += 9; // 3 + 6
    } else if (games[i][0] === "C" && games[i][1] === "X") {
      totalScore += 2; // 2 + 0
    } else if (games[i][0] === "C" && games[i][1] === "Y") {
      totalScore += 6; // 3 + 3
    } else if (games[i][0] === "C" && games[i][1] === "Z") {
      totalScore += 7; // 1 + 6
    }
  }
  console.log(totalScore);
});
