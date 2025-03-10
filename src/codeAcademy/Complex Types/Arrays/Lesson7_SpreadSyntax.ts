/**
 * 👉Spread Syntax
15 min
Like the finest wines and cheeses, TypeScript’s tuples  pair beautifully with JavaScript’s spread syntax. This is most useful for function calls that use lots of arguments, like this:

function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
  /* navigation subroutine here 
}


The function call gpsNavigate(40, 43.2, 'N', 73, 59.8, 'W', 25, 0, 'N', 71, 0, 'W') calculates a route from the Codecademy offices in New York City (40 degrees 43.2 minutes north, 73 degrees 59.8 minutes west) to selected coordinates in the Bermuda Triangle. We all agree that this function call is awkward to read.

Instead, we can use tuple 
Preview: Docs Loading link description
variables
 that represent the starting and ending coordinates:

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];


These tuple 
Preview: Docs Loading link description
type annotations
 guarantee that the types of the elements will be valid function parameters for gpsNavigate().

Now, we use JavaScript’s spread syntax to write a very readable function call:

gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// If there is a return trip . . . 

 */

// Explanation
// In TypeScript, when you define an array of arrays like arrayOfTuples, TypeScript infers its type based on the elements within the array. In this case, arrayOfTuples is inferred as an array of arrays, where each inner array contains a string followed by a number. This structure aligns with a tuple type of [string, number].

// Explicit Typing:

// To ensure that TypeScript treats each inner array as a tuple, you can explicitly define the type of arrayOfTuples as an array of [string, number] tuples:

const arrayOfTuples: [string, number][] = [
  ["Alice", 30],
  ["Bob", 25],
  ["Charlie", 35],
];
// By specifying [string, number][], you inform TypeScript that each element in arrayOfTuples is a tuple consisting of a string and a number.

// Now, you practice:

/**
 *1️⃣
An array of tuples could be a convenient way to store the arguments for many recurring function calls. In the code editor, we have defined the array danceMoves, every element of which is a tuple that contains arguments for the performDanceMove() function.

Please provide a type annotation for the danceMoves array that will ensure compatibility with the performDanceMove() function.
 */

function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if (hasFlair) {
    console.log("I do it with flair!");
  }
}

let danceMoves: [string, number, boolean][] = [
  ["chicken beak", 4, false],
  ["wing flap", 4, false],
  ["tail feather shake", 4, false],
  ["clap", 4, false],
  ["chicken beak", 4, true],
  ["wing flap", 4, true],
  ["tail feather shake", 4, true],
  ["clap", 4, true],
];

/**
 * 2️⃣
 * Perform the whole dance from start to finish by looping over the danceMoves array in whatever way you like, but make sure to use JavaScript’s spread syntax within performDanceMove().

It’s time to see the results of the dance! Run tsc to transpile the code to JavaScript and then run it with node index.js.
 */

for (let index = 0; index < danceMoves.length; index++) {
  const element = danceMoves[index];
  performDanceMove(...element);
}

// checking out For...of loop
// for (let move of danceMoves) {
//   performDanceMove(...move);
// }
