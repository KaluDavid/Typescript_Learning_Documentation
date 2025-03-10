// Introduction
// 19 min
// Our TypeScript journey has now led us to a new destination: Array-bia. Typing
// Preview: Docs In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.
// arrays
//  is a little bit different than working with primitive types. This is because arrays usually contain many pieces of data. Keeping track of the array’s type means keeping track of every element’s type. For example:

// let firstArray = [1, 2, 3, 4];
// let secondArray = [5, "6", [7]];

// We can see that firstArray has elements that are all number types. On the other hand, secondArray has elements of varying types: number, string, and Array. Both are examples of valid JavaScript arrays. As we’ll soon explore, TypeScript makes it very easy to keep track of element types in arrays, such as those above.

// For now, though, let’s make life difficult by pretending that TypeScript didn’t have special ways of typing arrays. How hard would it be to enforce type consistency?

// TASK
/* Imagine you are a software engineer for a company that keeps track of customer names in the array customersArray. The company’s codebase loops through this array to generate an annual report. The code was written by an untrained intern over 10 years ago, and it will crash the entire system if customersArray is found to contain any data of the number type!

Because you’re not using TypeScript, you need to write the function checkCustomersArray() to check that every element of customersArray is a string. For any element el that is not a string, this function should log an error message using the statement console.log(`Type error: ${el} should be a string!`).

Call the checkCustomersArray() function after you’ve defined it to see your messages print out */

let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

//Write Your Code here:
function checkCustomersArray() {
  for (let el = 0; el < customersArray.length; el++) {
    if (typeof customersArray[el] !== "string") {
      console.log(`Type error: ${customersArray[el]} should be a string!`);
    }
  }
}
checkCustomersArray();

// // Step 2
// OK, you found a couple of errors. (Wouldn’t it be nice if this error checking was automatic?) You’ll fix them later. Right now, there is a more pressing concern. The array customersArray is constantly being altered by existing code. The last thing we want is for somebody to .push() a non-string value into this array.

// Write an alternative pushing function called stringPush() that takes one argument: val, the value meant to be pushed into the array. The function should check if the val is a string and .push() it into the customersArray array only if it is a string.

//alternative pushing function
function stringPush(val) {
  if (typeof val === "string") {
    customersArray.push(val);
    console.log(customersArray);
  } else {
    console.log("sorry, value must be string");
  }
}

stringPush("Bread");
