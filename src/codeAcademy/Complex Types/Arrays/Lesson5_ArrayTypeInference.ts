/**
 * Array Type Inference
9 min
TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with 
Preview: Docs In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.
arrays
. For example:

let examAnswers= [true, false, false];


What is the type of examAnswers? It seems it could equally well be boolean[] or [boolean, boolean, boolean]. In reality, it is always the first of these, since this is the less restrictive type. This enables us to expand the array:

examAnswers[3] = true; // No type error.


Since 
Preview: Docs Loading link description
tuples
 have fixed lengths, we wouldn’t be able to add additional boolean elements to a tuple:

let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.


We also get the same kind of type inference when we use the .concat() method:
*/

let tup: [number, number, number] = [1, 2, 3];
let concatResult = tup.concat([4, 5, 6]); // concatResult has the value [1,2,3,4,5,6].

/*
In the code above, TypeScript infers the variable concatResult as an array of numbers, not a tuple.

The takeaway here is that type inference returns arrays. When we want tuples, we need to use explicit 
Preview: Docs Loading link description
type annotations
.
 */

//👉 1.
/*Let’s do a tricky example. We have defined the tuple dogTup in the code editor. Your challenge is to define a variable myArr of the type string[].

Not so fast! The hard part is that you are not allowed to use the word Array, or the characters[and].Use the.concat() method and your wits to solve the problem.
*/

// Don't change this part:
let dogTup: [string, string, string, string] = [
  "dog",
  "brown fur",
  "curly tail",
  "sad eyes",
];

// Your code goes here:

let myArr = dogTup.concat("black", "huge", "fat");
console.log(myArr);

/**
 * 2️⃣
 * You figured it out! Now demonstrate that myArr is an array rather than a tuple by adding the code myArr[50] = 'not a dog' and running tsc. If myArr were a tuple, accessing element 50 would be impossible!

 */
myArr[50] = "not a dog";
console.log(myArr);
