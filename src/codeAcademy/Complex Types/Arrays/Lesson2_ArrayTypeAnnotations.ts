/*
Array Type Annotations
5 min
The TypeScript type annotation for array types is fairly straightforward: we put [] after the element type. In this code, names is an Array that can only contain strings:

let names: string[] = ['Danny', 'Samantha'];


An alternative method is to use the Array<T> syntax, where T stands for the type.

let names: Array<string> = ['Danny', 'Samantha'];


In the code above, the type, T, is string. We won’t use Array<T> syntax in this lesson, but it’s nice to be familiar with it.

As we may expect, we get a type error if we try to assign an array of numbers to a string[] variable:

let names: string[] = [1,2,3]; // Type Error!


That was just like an assignment error with primitive types. TypeScript arrays, however, can also throw errors when elements of the wrong type are added:

let names: string[] = ['Damien'];
names.push(666) // Type Error!



*/

// 👉 TASK

/*The code editor contains several array assignments. Add the appropriate type annotations to the array variables in the // Arrays: section.
 */
// let bestNumbers = [7,77,4];
// let bestLunches = ['chicken soup', 'non-chicken soup'];
// let bestBreakfasts= ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
// let bestBooleans = [true, false];

// solution

let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBreakfasts: string[] = [
  "scrambled eggs",
  "oatmeal",
  "tamago kake gohan",
  "any kind of soup",
];
let bestBooleans: boolean[] = [true, false];
