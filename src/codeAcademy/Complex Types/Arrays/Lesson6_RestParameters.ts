/*
  Rest Parameters
9 min
Assigning types to rest parameters is similar to assigning types to 
Preview: Docs In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.
arrays
. Here’s a rest parameter example without types:

function smush(firstString, ...otherStrings){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}


This function concatenates all of its arguments. For example, calling: smush('hi ', 'there') returns the value 'hi there'.” The rest parameter otherStrings lets the function work with any number of parameters greater than zero:

smush('a','h','h','H','H','H','!','!'); // Returns: 'ahhHHH!!'.



The function works well, but it is not type safe. We don’t want a misguided coder to make a mistake like smush(1,2,3), when that would cause an error. TypeScript to the rescue! Type annotations for a rest parameter are identical to 
Preview: Docs Loading link description
type annotations
 for arrays. The function with a correctly typed rest parameter is then:

function smush(firstString, ...otherStrings: string[]){
//  rest of function
}


With this change, TypeScript will treat otherStrings as an array of strings. This means that smush(1,2,3) will result in a type error because [2,3] is not an array of strings.

Now, it’s your turn to write a rest parameter type!
 */

// 👉
/**
 * In JavaScript, the rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This feature enables the creation of functions that can handle varying numbers of inputs without explicitly defining each parameter. 

Syntax:

To define a rest parameter, prefix the last parameter in your function definition with three dots (...):
function functionName(param1, param2, ...restParam) {
  // Function body
}

Key Points:

A function can have only one rest parameter, and it must be the last parameter in the function definition.

The rest parameter gathers all remaining arguments into an array, allowing for flexible handling of multiple inputs.


 */
// Let's play around

function restParam(...rest: string[]) {
  return rest.reduce((str, num) => str + num);
}
console.log(restParam("hey", "Dhave", "wagwan"));

// TASK

/**
 *1️⃣
 .
The code editor includes another function using rest parameters. The function, addPower(p, ...numsToAdd), adds up the pth powers of all the subsequent arguments. So the call addPower(2, 3, 4) returns 25, since 3 squared plus 4 squared is 25. (Here, we are using the exponentiation operator **.)

Please add the appropriate type annotations for this function. Include the annotations for all arguments and the return type.

function addPower(p, ...numsToAdd){
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}


 */

function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

/**
 *2️⃣
 There is no such thing as a number to the power of 'a string'. Verify that the function results in a type error when you add the code addPower('a string', 4, 5, 6) and run tsc.

 */
// addPower("a string", 4, 5, 6);
