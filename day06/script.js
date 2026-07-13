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


let computer = Math.floor(Math.random() * 100) + 1;

let userInput;

do {
    userInput = Number(prompt("Enter a Number between 1 and 100:"));
    // userInput = 23

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        console.log("Enter a valid number.");
        continue;
    }

    if (userInput > computer) {
        console.log("Too high, try again.");
    } else if (userInput < computer) {
        console.log("Too low, try again.");
    } else {
        console.log("🎉 You guessed it! The number was " + computer);
    }

} while (userInput !== computer);