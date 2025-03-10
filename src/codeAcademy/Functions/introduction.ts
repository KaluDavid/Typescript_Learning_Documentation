/* Functions
Introduction
7 min
When we declare a function in JavaScript, we often expect it to be invoked with arguments of a certain type. JavaScript does not share our expectations: its type flexibility often allows functions
 to be invoked with unexpected argument types. Even when this doesn’t result in thrown errors, there can be negative consequences:

 e.g
*/
function printLengthOfText(text) {
  console.log(text.length);
}

printLengthOfText(3); // Prints: undefined

/*
JavaScript developers have found error-handling solutions to avoid such undesirable effects, but these techniques can be cumbersome
*/
// function printLengthText(text) {
//   if (typeof text !== "string") {
//     throw new Error("Argument is not a string!");
//   }

//   console.log(text.length);
// }

// printLengthText(3); // Error: Argument is not a string!

/* 
In the code above, the function first checks the argument type. If it doesn’t match the expected type, an error is thrown; otherwise, it continues with its intended operation.

Before we explore how TypeScript handles this issue, let’s practice fixing some JavaScript type-related bugs. These are the kinds of problems that TypeScript helps us diagnose early on, before they become hard to spot.

*/
// Example
//my Exercise

function printOperations(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers!");
  }

  console.log(a + b, a / b);
}

// The function call below should print: 12 1
printOperations(6, 6);

function exclaim(name, count) {
  for (let i = 0; i < count; i += 1) {
    console.log(`${name}! no dawg`);
  }
}

// Exclaim 'Muriel!' six times
exclaim("Muriel", 6);

// Understanding the For Loop
/*
A `for` loop is a control structure used to repeat a block of code a specific number of times. It consists of three main parts:

1. **Initialization**: `let i = 0` sets up a loop counter `i` starting at 0.

2. **Condition**: `i < count` checks if the loop should continue. The loop runs as long as this condition is true.

3. **Increment**: `i += 1` increases the counter by 1 after each loop iteration.

The loop executes the code block inside `{}` repeatedly until the condition is false. In this case, it prints the `name` with "! no dawg" `count` times.

*/
