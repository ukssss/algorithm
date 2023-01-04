const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const test = Number(input[0]);

for (let i = 1; i < test + 1; i++) {
  let [repeat, spell] = input[i].split(" ");
  let spellArr = spell.split("");
  let result = "";
  for (let j = 0; j < spellArr.length; j++) {
    for (let k = 0; k < Number(repeat); k++) {
      result += spellArr[j];
    }
  }

  console.log(result);
}