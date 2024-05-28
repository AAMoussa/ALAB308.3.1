// Part 2: Prime Time
// Find the next prime number

// Define the variable that we need to find
// the next prime after it. 

const num = 49;
//now iterate ascendingly
// to check each number after num

mainLoop: for(let i = num; i < 100; i++){       // 1 is not a prime. if true continue
                if (i === 1) continue;          // to the rest of the code or skip the
                                                // current codeblock
                
                for(let j = num; j > 1; j-- ){
                    if(i % j === 0){            //that's true for the first iteration 
                        continue mainLoop;      // till you reach the i that will fail the if()
                    }                            // in all the inner for loop iterations.
                }                               //That's when we log that i, then break out from the main loop.
                console.log( i + " is the next prime! After " + num)
                break mainLoop;
            }