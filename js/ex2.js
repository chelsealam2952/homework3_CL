const Studentname = prompt("Enter your name: ")
const Grade = parseInt(prompt("Enter your grade stading: "));
alert(`Hello, ${Studentname}. Your grade standing is: ${Grade}`);
grade = Number(Grade);
if (grade >= 0 && grade <= 30) {
  console.log("Freshman");
}
else if (grade >= 31 && grade <= 60) {
  console.log("Sophomore");
}
else if (grade >= 61 && grade <= 90) {
  console.log("Junior");
}
else if (grade >= 91) {
  console.log("Senior");
}
else {
  console.log("Invalid Number!")
}
