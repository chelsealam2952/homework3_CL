let day = prompt("Please enter your favorite day of the week: ")
switch(true){
  case (day == "Sun"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: Mon");
    break;
  case (day == "Mon"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: Tues");
    break;
    case (day == "Tues"):
      console.log(`You entered: ${day}`);
      console.log("The following day is: Wed");
      break;
      case (day == "Wed"):
        console.log(`You entered: ${day}`);
        console.log("The following day is: Thurs");
        break;
      case (day == "Thurs"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: Fri");
    break;
    case (day == "Fri"):
      console.log(`You entered: ${day}`);
      console.log("The following day is: Sat");
      break;
      case (day == "Sat"):
        console.log(`You entered: ${day}`);
        console.log("The following day is: Sun");
        break;
  default:
    console.log("You have enter invalid day!")
}