// let n = 1
// for(let i=1; i<1;i++){
//     console.log(i)
// }
// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<n)

// let userInput;
// do {
//   console.log("Hello");
//   userInput = prompt("Do you want to continue: Yes/No").toLowerCase();
// } while (userInput === "yes");

// let computer = Math.floor(Math.random() * 100) + 1;

// let userInput;

// do {
//     userInput = Number(prompt("Enter a Number between 1 and 100:"));
//     // userInput = 23

//     if (isNaN(userInput) || userInput < 1 || userInput > 100) {
//         console.log("Enter a valid number.");
//         continue;
//     }

//     if (userInput > computer) {
//         console.log("Too high, try again.");
//     } else if (userInput < computer) {
//         console.log("Too low, try again.");
//     } else {
//         console.log("🎉 You guessed it! The number was " + computer);
//     }

// } while (userInput !== computer);

// do {
//   let num1 = Number(prompt("Enter a First Number: "));
//   let num2 = Number(prompt("Enter a Second Number: "));
//   let operator = prompt("select the Operator (+,-,*,/): ");

//   let userInput = " ";
//   switch (operator) {
//     case "+":
//       console.log("The addition of Two number is : " + (num1 + num2));
//       break;
//     case "-":
//       console.log("The subtraction of Two number is : " + (num1 - num2));
//       break;
//     case "*":
//       console.log("The multiplication of Two number is : " + num1 * num2);
//       break;
//     case "/":
//       if (num2 !== 0)
//         console.log("The division of Two number is : " + num1 / num2);
//       else console.log("Cannot divide by 0.");
//       break;
//     default:
//       console.log("enter a valid Operator.");
//   }

//   userInput = prompt(
//     "do you want to continue. then press (yes/no)",
//   ).toLowerCase();
// } while (userInput === "yes");

// let choice;
// let totalBill = 0;
// let quantity;
// do {
//   console.log(`
// ========= Restaurant Menu =========

// 1. Pizza      - ₹250
// 2. Burger     - ₹120
// 3. Pasta      - ₹180
// 4. Show Bill
// 5. Exit
// `);
//   choice = prompt("Enter your choice (1,2,3,4,5): ");

//   switch (choice) {
//     case "1":
//       quantity = Number(prompt("Enter a quantity: "));
//       totalBill = totalBill + 250 * quantity;
//       console.log("Pizza Added.");
//       break;
//     case "2":
//       quantity = Number(prompt("Enter a quantity: "));
//       totalBill = totalBill + 120 * quantity;
//       console.log("Burger Added.");
//       break;
//     case "3":
//       quantity = Number(prompt("Enter a quantity: "));
//       totalBill = totalBill + 180 * quantity;
//       console.log("Pasta Added.");
//       break;
//     case "4":
//       console.log("your Total Bill is : " + totalBill);
//       break;
//     case "5":
//       break;

//     default:
//       console.log("please enter a valid choice.");
//   }
// } while (choice !== "5");
