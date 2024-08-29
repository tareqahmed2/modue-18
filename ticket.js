var ticketPrice = 800,
  children,
  seniorCitizens;
var student;
var age = parseInt(prompt("enter your age:"));
if (age < 10) {
  ticketPrice = 0;
  console.log("you are a children your ticket fee is =" + ticketPrice);
} else if (age > 10 && age <= 25) {
  ticketPrice = ticketPrice * 0.5;
  console.log("you are a student your ticketprice is=" + ticketPrice);
} else if (age >= 60) {
  ticketPrice = ticketPrice - ticketPrice * (15 / 100);
  console.log("ticketprice" + ticketPrice);
} else {
  ticketPrice = ticketPrice;
  console.log("ticketprice=" + ticketPrice);
}
