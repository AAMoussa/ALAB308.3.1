// Part 1: Fizz Buzz
// -----------------
// Accomplish the following:

// Loop through all numbers from 1 to 100.

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){         // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log("Fizz Buzz.");
    }else if(i % 3 === 0){                        // If a number is divisible by 3, log “Fizz.”
        console.log("Fizz");
    }else if(i % 5 === 0){                        // If a number is divisible by 5, log “Buzz.”
        console.log("Buzz");
    }else if(i % 3 !== 0 || i % 5 !== 0){                              // If a number is not divisible by either 3 or 5, log the number.
        console.log(i);
    }
}

//********************************************************************************************************* */
