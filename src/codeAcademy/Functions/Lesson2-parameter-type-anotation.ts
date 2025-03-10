//   LESSON TWO
// Parameter Type Annotations

// Preview: Docs TypeScript uses type annotation to explicitly type things such as variables, functions, and classes.

/* In TypeScript, function parameters may be given type annotations with the same syntax as variable declarations: a colon next to the name. The type annotations ensure that the parameters are of the correct type:
 e.g: 
 function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
greet('Katz'); // Prints: Hello, Katz  

greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
*/

/*
By placing : string after the name parameter, we’re declaring that name is of type string. Any invocation of greet() should pass a value of type string as the first argument, or else an error will be thrown.

Parameters that we do not provide type annotations for are assumed to be of type any—the same way variables are.
*/
// example
function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}

printKeyValue("Courage", 1337); // Prints: Courage: 1337
printKeyValue("Mood", "scared"); // Prints: Mood: scared

// Here, the parameter value is an any variable: it’s compatible with any type.

//   My task
function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled("Hiya", 5);

const dhave = (ella: string) => {
  return ella;
};

console.log(dhave("I love Ella"), "hey");
