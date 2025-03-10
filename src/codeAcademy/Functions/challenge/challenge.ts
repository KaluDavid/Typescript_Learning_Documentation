/*1️⃣ Parameter Type Annotation
Task: Write a function called calculateArea that takes length and width as parameters (both should be numbers) and returns the area of a rectangle.
*/

function calculateArea(length: number, width: number) {
  return length * width;
}

const area = calculateArea(5, 10);

console.log(`${area} is the area of a rectangle`);

/* 2️⃣ Optional Parameters
Task: Create a function greetUser that takes a name as a required parameter and a greeting message as an optional parameter. If no greeting is provided, use "Hello" as the default*/

function greetUser(name?: string) {
  return name || "Hello";
}

console.log(greetUser()); //Hello
console.log(greetUser("Hey man")); //Hey man!

/*
3️⃣ Default Parameters
Task: Write a function multiply that takes two parameters:

num1: required number
num2: optional number (default is 2)
The function should return the product of num1 and num2.
*/

function multiply(num1 = 5, num2 = 2) {
  return num1 * num2;
}

console.log(multiply());
console.log(multiply(5, 3));

/*
4️⃣ Inferring Return Types
Task: Create a function isEven that takes a number and returns true if it's even, otherwise false. Don’t explicitly define the return type—let TypeScript infer it.
*/
function isEven(num: number) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));

/*
5️⃣ Explicit Return Types
Task: Define a function getUserInfo that takes a name (string) and age (number) and explicitly returns an object with these properties.
*/

/*


6️⃣ Void Return Type
Task: Create a function logMessage that does not return anything (void). It should just log a message to the console.
*/

function logMessage(message: string): void {
  console.log(message);
}
logMessage("This is TypeScript!");
// Output in console: "This is TypeScript!"

/* 
7️⃣ Documenting Functions
Task: Write a function calculateCircleArea with proper TypeScript documentation using JSDoc. The function should take a radius (number) and return the area of the circle.
*/
