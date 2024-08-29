var money = parseInt(prompt("how much money you cost:"));
var drinks = 30;
if (money >= 500) {
  money = money - drinks;
  console.log("your money after discount =" + money);
} else {
  console.log("you have no discount please give me your bil=" + money);
}
