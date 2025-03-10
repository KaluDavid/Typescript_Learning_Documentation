/**
 * Tuples
10 min
So far we’ve looked at arrays with all elements of the same type. But, as we know, JavaScript arrays are flexible and can have elements of different types. With TypeScript, we can also define arrays with a fixed sequence of types:

let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 


In TypeScript, when an array is typed with elements of specific types, it’s called a tuple. The tuple above (ourTuple) contains the elements: 'Is', 7 , 'our favorite number?' , false and the tuple has a type of [string, number, string, boolean]. Tuple types specify both the lengths and the orders of compatible 
Preview: Docs Loading link description
tuples
, and will cause an error if either of these conditions are not met:

let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 



As far as JavaScript is concerned, tuples act just like arrays. They both have .length properties. We can access (or change) the elements of both using [index]. But despite their similarities, tuples and arrays do not have compatible types within TypeScript. Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type:

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple.



 */

// FURTHER EXPLANATIONS FROM DOCS

//  👉 Destructuring a Tuple
// Like arrays and objects, tuples can be deconstructed into new variables that represents each element and their type. For example, here is a variable, popStar, with a given tuple type. One the other line, the popStar is destructured into four separate variables through its tuple type:

const popStar: [string, number, string, boolean] = [
  "Lil Nas X",
  22,
  "Old Town Road",
  true,
];

const [popStarName, age, popSingle, stillActive] = popStar;

console.log(`${popStarName} is ${age} years old.`);

console.log(
  `They are ${
    stillActive
      ? "still active in the industry"
      : "no longer active in the industry"
  }.`
);

console.log(`One of their most famous songs is ${popSingle}.`);

// Destructuring tuple types allows to be able to better interpolate their values and the output will be:

// 👉 Storing Returned Values in Tuples
// Tuples are particularly useful for representing multiple return values from functions, or groups of values that are meant to be used together.

// In this example, the positiveDifference() function is declared as returning an array consisting of a string and a boolean function:

function positiveDifference(left: number, right: number): [number, boolean] {
  return left > right ? [left - right, true] : [right - left, false];
}

const [difference, isPositive] = positiveDifference(7, 49);

difference; // Type: number, Value: 42
isPositive; // Type: boolean, Value: false
console.log(difference);
console.log(isPositive);

// Now let’s practice using tuples and tuple types!

// 👉 TASK

/*1️⃣.
The code editor has defined the variable favoriteCoordinates with the precise location of the Codecademy headquarters. The location is expressed as a tuple encoding the coordinates 40 degrees 43.2 minutes north latitude, 73 degrees 59.8 minutes west longitude.

Please provide the correct type annotation for this tuple.

let favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];


*/

// solu;

let favoriteCoordinates: [number, number, string, number, number, string] = [
  40,
  43.2,
  "N",
  73,
  59.8,
  "W",
];

/**2️⃣
 Actually, our favorite place is not the Codecademy headquarters (wonderful though it may be). Reassign the variable favoriteCoordinates to a tuple that expresses the objectively best coordinates, the center of the Marianas trench at 17 degrees 45 minutes north, 142 degrees 30 minutes east.

 */
favoriteCoordinates = [17, 45, "N", 142, 30, "E"];

/* 3️⃣
Sadly, the tuple favoriteCoordinates still doesn’t describe the best part of the marianas trench: the bottom. Try to fix this by adding the deepest depth to the end of the tuple: Add the code favoriteCoordinates[6] = -6.825; and then run tsc.

That’s 6.825 miles deep!

*/
// favoriteCoordinates[6] = -6.825;
