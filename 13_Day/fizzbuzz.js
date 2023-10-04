/* 
    Q: what is fizzbuzz?

    > fizzBuzz is a game where you count from 1- 100 and for every number that is divisible by 3, you say fizz and 
    for every number that is divisible by 5, you say buzz. if a number is divisible by both 3 and 5, you say fizzBuzz
*/

// Using for loop

// for (let i = 1; i < 11; i++) {
//     if (i % 15 === 0) {
//         console.log("FIZZBUZZ");
//     } else if (i % 3 === 0) {
//         console.log("FIZZ");
//     } else if (i % 5 === 0) {
//         console.log("BUZZ");
//     } else {
//         console.log(i);
//     }
// };

// Using while loop

// let i = 0;

// while(i<100){
//     i++;

//     if (i%15 === 0) {
//         console.log("FIZZBUZZ");
//     }else if(i%3 === 0){
//         console.log("FIZZ");
//     }else if(i%5 === 0){
//         console.log("BUZZ");
//     }else{
//         console.log(i)
//     }

// };

// do while loop

// let j = 1;

// do {
//     if (j% 15 === 0) {
//         console.log("FIZZBUZZ");
//     } else if (j%3 === 0) {
//         console.log("FIZZ");
//     }else if(j%5 === 0){
//         console.log("BUZZ")
//     }
//     j++
// } while (j < 15);

// leet code

var fizzBuzz = function (n) {
    let outPut = [];
    for(let i = 1; i<= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            outPut.push('FIZZBUZZ');
        }else if(i % 3 === 0){
            outPut.push("FIZZ");
        }else if(i % 5 === 0){
            outPut.push("BUZZ");
        }else{
            outPut.push(i.toString())
        }
    }
    return outPut;
};

// call the function
console.log(fizzBuzz(15))
