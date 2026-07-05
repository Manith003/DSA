// console.log(Math.ceil(10.1))
// console.log(Math.floor(10.9))
// console.log(Math.round(10.5))
// console.log(Math.abs(-0))
// console.log(Math.trunc(10.1235))
// console.log(Math.pow(2,4))
// console.log(Math.sqrt(40))
// console.log(Math.cbrt(27))
// console.log(Math.max(12,34,56,23,87,9))
// console.log(Math.min(12,34,56,23,87,9))
// console.log(Math.floor(Math.random() * 1000) + 1000);
// let a = Math.random()*1000
// console.log(+a.toFixed(2))

// compound Interest
// let p = +prompt("enter principle: ");
// let r = +prompt("enter rate: ");
// let t = +prompt("enter time: ");

// console.log((p * Math.pow(1 + r /   , t)) - p);

//random - otp
// let a = Math.trunc(Math.random()*9000 + 1000)
// console.log(a)

// function heronsFormula(a, b, c) {
//   if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log("NOT POSSIBLE");
//     return
//   }
//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   console.log(+area.toFixed(2));
// }

// heronsFormula(10,10,10);

// let r = +prompt("enter Radius value : ");
// console.log((2 * Math.PI * r).toFixed(2));

// if (1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let a = +prompt("enter a number");
// let b = +prompt("enter a number");

// if (a > b) {
//   console.log(`a that is ${a} is greater than b`);
// } else {
//   console.log(`b that is ${b} is greater than a`);
// }

// let a = +prompt("enter a number")
// let result = a%2===0 ? "Even" : "Odd"
// console.log(result)

// let age = +prompt("enter a age: ")
// let name = prompt("enter a name: ")

//  if(age >= 18){
//     console.log(`${name} is a valid voter`)
//  }else{
//     console.log(`${name} is NOT a valid voter`)
//  }

//finding leap year

let year = +prompt("enter a year");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is NOT a leap year`);
}
