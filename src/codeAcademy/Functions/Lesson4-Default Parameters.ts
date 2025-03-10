/*
If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type. (This is similar to how TypeScript infers the type of an initialized variable to be the same as the type of its initial value.)

Further Explanation
The following code snippet logs a string to greet a user’s name, and defaults to the name 'Anonymous' if no name is provided.

function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

The function greet() can receive a string or undefined as its name parameter—if any other type is provided as an argument, TypeScript will consider that a type error.

This is a cleaner way of getting the same functionality we had in the previous exercise. There, we used ? to mark the name parameter as optional. But parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters.


*/

//e.g. my code with option params
// function proclaim(status?: string, repeat?: number) {
//   for (let i = 0; i < repeat || 0; i += 1) {
//     console.log(`I'm ${status || "not ready..."}`);
//   }
// }

// proclaim();
// proclaim("ready?");
// proclaim("ready!", 3);

// Same code with default params
function proclaim(status = "not ready...", repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim("ready?");
proclaim("ready!", 3);

// You see the difference

const dhave = (ella = "maybe") => {
  return `DOes Ella love Dhave? ${ella}`;
};

console.log(dhave("no she doesn't"));
console.log(dhave());

// Try it out with Optional params
const danny = (danny?: string) => {
  return `DOes danny love Dhave? ${danny || "maybe"}`;
};

console.log(danny());
console.log(danny("Yes she does"));
