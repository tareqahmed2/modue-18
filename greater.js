var num1, num2;

num1 = parseInt(prompt("enter the number1"));
num2 = parseInt(prompt("enter the number2"));
var result;

// num1 > num2 ? (result = 2 * num1) : (result = num1 + num2);

// console.log("result=" + result);
if (num1 > num2) {
  result = 2 * num1;
  console.log("result=" + result);
} else if (num1 < num2) {
  result = num1 + num2;
  console.log("result=" + result);
}
