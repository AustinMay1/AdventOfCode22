let fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").toString();

const rucksack = input.split("\n");

const calculatePri = (char) => char.charCodeAt(0) - (char === char.toLowerCase() ? 96 : 38);

const findMatch = (s1, s2, s3) => {
  for (let i in s1) {
    let common = s2.includes(s1[i]) && s3.includes(s1[i]) ? s1[i] : false;
  
    if (common != "") {
      return common;
    }
  }
}

const findSumOfGroups = (input) => {
  counter = 0;
  points = 0;
  let group = [];
  for (const rucksack of input) {
    group.push(rucksack);
    console.log(group)
    if (group.length == 3) {
      let common = findMatch(group[0], group[1], group[2]);
      let groupTotal = calculatePri(common);
      points += groupTotal;
      group = [];
    }
  }
  console.log(points);
};

findSumOfGroups(rucksack);

