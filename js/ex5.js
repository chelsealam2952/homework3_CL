function passwordValidator() {
  // geting the values from html page using its ids
  let userInput = document.getElementById("password").value;
  let result = document.getElementById("result");

  // declaring variables wrong to store wrong attempts
  // tries to loop throgh until it becomes 3
  let wrong = 0;
  let tries = 1;
  // checks if userInput in null
  if (!userInput) {
    // if yes then an alert is send
    alert("Enter a password");
    // if userInput is not null,then
  } else {
    // this while loop checks if the user enters correct password
    while (tries <= 3) {
      // prompting the user to enter password again
      //   that value is stored in promptValue variable
      let promptValue = prompt("Enter the password again");
      //   checks if promptValue is equal to userInput
      if (promptValue == userInput) {
        // if yes then in the screen it will show in how many attempts
        // the user inputed the password
        result.innerHTML =
          "You entered the correct password after " + wrong + " attempt(s)";
        //   exits the loop
        break;
      } else {
        //   if the password enterd is wrong,then the count is incrimented by 1
        wrong++;
      }
      //   loop variable is updated
      tries++;
    }
    // if the user does not enter password correctly 3 times
    // then this part is executed
    if (wrong == 3) {
      // the program will show that account is locked
      result.innerHTML =
        "Your account is locked! You failed to enter the correct password " +
        wrong +
        " times";
    }
  }
}