var myScore = parseInt(prompt("my score is:"));
var friendScore = parseInt(prompt("what is your score my freind:"));
if (myScore > 80) {
  if (friendScore > 80) console.log("my friend let's go for a lunch ");
  else if (friendScore >= 60) {
    console.log("better luch my freind next time");
  } else if (friendScore <= 60 && friendScore > 40) {
    console.log("I will never see your message my boy");
  } else if (friendScore < 40) {
    console.log("I will block you");
  }
} else if (myScore < 80) {
  console.log("I feel so sad today............");
}
