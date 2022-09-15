const Number = prompt("Enter a number between 1 and 100:");
console.log(Number);
if (Number < 1) {
  console.log(`Sorry, ${Number} is not a valid entry`);
} else if (Number > 100) {
  console.log(`Sorry, ${Number} is not a valid entry`);
} else {
  console.log(`Thank you! you entered ${Number}, a valid number`);
}
