const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let gradesTotal = 0;
let mixTotal = 0;
let majorScore = 0; // 전공평점

for (let i = 0; i < list.length; i++) {
  let sugang = list[i].split(' ');
  let grades = parseFloat(sugang[1]); // 학점
  let subjectGrade = 0; // 과목평점

  if (sugang[2] === 'A+') {
    subjectGrade = 4.5;
  } else if (sugang[2] === 'A0') {
    subjectGrade = 4.0;
  } else if (sugang[2] === 'B+') {
    subjectGrade = 3.5;
  } else if (sugang[2] === 'B0') {
    subjectGrade = 3.0;
  } else if (sugang[2] === 'C+') {
    subjectGrade = 2.5;
  } else if (sugang[2] === 'C0') {
    subjectGrade = 2.0;
  } else if (sugang[2] === 'D+') {
    subjectGrade = 1.5;
  } else if (sugang[2] === 'D0') {
    subjectGrade = 1.0;
  } else if (sugang[2] === 'F') {
    subjectGrade = 0.0;
  }

  if (sugang[2] !== 'P') {
    gradesTotal += grades;
    mixTotal += grades * subjectGrade;
  }
}

majorScore = mixTotal / gradesTotal;
console.log(majorScore.toFixed(6));