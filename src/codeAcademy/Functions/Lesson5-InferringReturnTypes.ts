/*
TypeScript can also infer the types of values returned by functions
. It does this by looking at the types of the values after a function’s return statements.

e.g.

function createGreeting(name: string) {
  return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Aisle Nevertell');


Here’s how TypeScript can infer myGreeting above to be of type string:

createGreeting()’s return statement is followed by a string variable, so createGreeting() is inferred to return string.
createGreeting('Aisle Nevertell') therefore must result in a value of type string.
myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type string.
Cool! Let’s see how this can help us fix bugs:

e.g.]


function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}

const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.


Here, TypeScript was able to infer that liquidAmount was being assigned a value of type string, despite it being declared as a variable of type number. This correctly results in an error being surfaced.


*/

// Understanding it better
/*
What is Inferring Return Types?
👉 It means TypeScript guesses (infers) what type a function returns.

*/
/*
// e.g.
// Imagine you have a function that adds two numbers:


function add(a: number, b: number) {
  return a + b;
}
// Here, we didn’t tell TypeScript the return type, but TypeScript knows that a + b is a number.
// So, TypeScript automatically infers that add() returns a number.

How TypeScript Infers Return Types?
👉 TypeScript looks at the return statement inside the function and guesses the type

further example explanation

👉 1. Implicit Inference
If you don’t explicitly define the return type, TypeScript determines it based on the returned value.

function add(a: number, b: number) {
  return a + b;
}

// TypeScript infers that the return type is `number`
const result = add(5, 10); // result: number

explanation of code

👉 This function takes two numbers (a and b).
It returns their sum (a + b).
We did NOT specify a return type (: number), but TypeScript automatically infers that the return type is number.
Why? Because a + b is always a number! 🔢

👉 We call the function add(5, 10).
5 is assigned to a.
10 is assigned to b.
Inside the function, return 5 + 10 → returns 15 (a number).
We store the returned value (15) in a variable called result.

👉 Now, result holds the value 15, and TypeScript automatically knows that result is a number.

👉 Therefore, what is returned becomes the value of the variable

*/
