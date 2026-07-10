// let n = Number(prompt("Enter a Number: "));

// function printNumber(n) {
//   if (isNaN(n)) {
//     console.log("invalid Input.");
//     return;
//   }

//   let i;
//   for (i = 1; i <= n; i++) {
//     console.log("hello World");
//   }
//   console.log("fail at " + i);
// }

// printNumber(n);

// let n = 5

// for(let i = n; i>=1; i--){
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
// console.log(`5 * ${i} = ${5*i}`)
// }

// let n = 10
// let sum = 0

// for(let i =1; i<=n ; i++){
//     sum+=i
// }

// console.log(sum)

// let n = Number(prompt("enter a number"))
// let fact = 1

// for(let i=1;i<=n;i++){
//     fact *= i
// }

// console.log(fact)

// let n = Number(prompt("enter a number"));
// let evenSum = 0,
//   oddSum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log("Even Number "+ i);
//   } else {
//     console.log("Odd Number "+ i);
//   }
// }

// let n = 13

// for(let i=1;i<=n/2;i++){
//     if(n%i===0) console.log(i)
// }
// console.log(n)

// let n = 50;
// let arr = []
// for (let j = 2; j < n/2; j++) {
//     let i;
//   for (i = 2; i < j; i++) {
//     if (j % i === 0) {
//       //   console.log("NOT a PRIME NUMBER.");
//       break;
//     }
//   }

//   if (j === i) {
//     arr.push(j);
//   }
// }


// console.log(arr[Math.floor(arr.length/2)-1] + arr[Math.floor(arr.length/2)])

// let n = Number(prompt("enter a number: "))
// let isPrime = true

// for(let i=2;i<n/2;i++){
//     if(n%i===0){
//         isPrime=false
//         break
//     }
// }

// if(isPrime){
//     console.log("PRIME NUMBER...")
// }else{
//     console.log("NOT A PRIME NUMBER...")
// }

// let a = 2, b = 5

// console.log(Math.pow(a,b))