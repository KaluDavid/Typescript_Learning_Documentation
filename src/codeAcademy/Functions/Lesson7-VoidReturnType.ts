// Lesson 7
// 👉 Void Return Type

//👉 Overview
/* By now, we’ve made a pretty convincing case that type annotations are very useful and should always be used unless there’s a very good reason not to. They make everything neat and aid in understanding our code.

For these reasons, it is often preferred to use type annotations for functions, even when those functions don’t return anything. Example*/

// e.g
/*
function logGreeting(name: string){
  console.log(`Hello, ${name}!`)
}
 */

/*
The function logGreeting() simply logs a greeting to the console. There is no returned value, so we must treat the return type as void. A proper type annotation for this function would look like this:

e.g
*/

function logGreeting(name: string): void {
  console.log(`Hello, ${name}!`);
}
logGreeting("world");

// 👉 Note: a function whose declared type is neither 'void' nor 'any must return a value
