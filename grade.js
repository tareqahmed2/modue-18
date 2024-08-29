var result = parseInt(prompt("enter your between (0-100) result:"));
if (result >= 80) {
  console.log("you are get cg:4");
} else if (result < 80 && result >= 70) {
  console.log("you are get cg:3.5");
} else if (result < 70 && result >= 60) {
  console.log("you are get cg:3.25");
} else if (result < 70 && result >= 60) {
  console.log("you are get cg:3.25");
} else if (result < 60) {
  console.log("you are falied try again");
} else if (result > 100) {
  console.log("this is not a valid score");
}
