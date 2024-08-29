var weight = parseFloat(prompt("enter your weight in kg:"));

var height = parseFloat(prompt("enter your height in meter:"));

var bmi = weight / (height * height);
console.log("bmi=" + bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.6 && bmi <= 24.9) {
  console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you ar obese");
}
