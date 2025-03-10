// LESSON 6
// Explicit return type

/*
👉If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other 
Preview: Docs Loading link description
type annotations
, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value.

e.g
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

👉This approach is way better a TS is explicitly told what to do. If it returns anything contrary, it'll throw an error

👉 We can also explicitly state return types for arrow 
Preview: Docs Loading link description
functions
 
*/

/* 
Why Use Explicit Return Types?
Improves readability: Makes it clear what a function should return.
Avoids accidental return type changes: Helps maintain consistent return types.
Works well with complex return types: Useful when returning objects or functions.

*/
// Example
function name(ella: string): string {
  return ella;
}
const yello = name("hello");

console.log(yello + " " + "World");
