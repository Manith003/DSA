// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// let c = +prompt("Enter third number");

// if (a > b && a > c) {
//   console.log(`A that is ${a} is greater`);
// } else if (b > c) {
//   console.log(`B that is ${a} is greater`);
// } else {
//   console.log(`C that is ${a} is greater`);
// }

// leap years
// let year = +prompt("Enter year");

// if((year%4===0&&year%100!==0)){
//     console.log("leap Year")
// }else if(year%400===0){
//     console.log("leap Year")
// }else{
//     console.log("not a leap Year")
// }

// let amount = Number(prompt("Enter a amount: "));
// let discount = 0;

// function calculateDiscount(amount) {
//   if (amount < 0) {
//     console.log("enter a valid number.");
//     return;
//   }

//   if (amount <= 3000) discount = 0;
//   else if (amount <= 5000) discount = 10;
//   else if (amount <= 7000) discount = 15;
//   else discount = 20;

//   let result = amount - (amount * discount) / 100;

//   console.log(`Your payable amount is ${result}`);
// }

// calculateDiscount(amount);

// electric bill

// let units = Number(prompt("enter a units: "));
// let amount = 0;

// if (units <= 100) {
//   amount = units * 4.2;
// } else if (units <= 200) {
//   amount = 100 * 4.2 + (units - 100) * 6;
// } else if (units <= 400) {
//   amount = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
// } else if (units > 400) {
//   amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;
// }

// console.log(amount)

let units = Number(prompt("enter a units: "));
let amount = 0;

if (units > 400) {
  //700
  amount = (units - 400) * 13;
  units = 400;
}

if (units <= 400) {
  amount = amount + (units - 200) * 8;
  units = 200;
}

if (units <= 200) {
  amount = amount + (units - 100) * 6;
  units = 100;
}

amount = amount + units * 4.2;

console.log(amount);
