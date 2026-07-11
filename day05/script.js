// let n = 10

// for(let i=1;i<=n;i++){
//     if(i===5) break
//     console.log(i)
// }


// for(let i=1;i<=n;i++){
//     if(i===5) continue
//     console.log(i)
// }

// let num = 123
// let result = 0
// while(num>0){
// let lastDigit = num%10
// result += lastDigit
// num = Math.floor(num/10)   
// }

// console.log(result)


// let n = 3452
// let rev = 0

// while(n>0){
//     let rem = n%10;
//     rev = (rev*10)+rem;
//     n = Math.floor(n/10)
// }

// console.log(rev)


// let n = Number(prompt("enter a number : "))
// let temp = n
// let count = 0
// let square = n*n

// while(temp>0){
//     count++
//     temp = Math.floor(temp/10)
// }

// if(square%Math.pow(10,count) === n) console.log("Automorphic Number.")
// else console.log('NOT A Automorphic Number.')



let n = 5

switch(n){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;

    default:
        console.log("brooooooooo!")
}
