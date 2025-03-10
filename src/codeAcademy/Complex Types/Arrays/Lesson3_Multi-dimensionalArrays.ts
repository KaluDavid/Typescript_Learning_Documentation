/* 
Multi-dimensional Arrays
5 min
So far we’ve looked at string[] 
Preview: Docs In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.
arrays
, but we could also have arrays that only contain numbers (number[]) or booleans (boolean[]). In fact, we can make arrays of any type whatsoever. We can also declare multidimensional arrays: arrays of arrays (of some type).

let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];


Think of the string[][] above as short for (string[])[], that is, an array where every element has type string[]. We’ll explore more complex array types in later lessons.

The empty array ([]) is compatible with any array type:

let names: string[] = []; // No type errors.
let numbers: number[] = []; // No type errors.
names.push('Isabella');  
numbers.push(30);
*/

/* Understanding the concept better -

**What is a Multidimensional Array?**

A **multidimensional array** is essentially an array that contains other arrays as its elements, allowing for data representation in a grid-like or tabular structure. This is particularly useful for modeling complex data such as matrices, tables, or even higher-dimensional datasets.

**Analogy: Bookshelf Organization**

Imagine you have a bookshelf with multiple shelves, and each shelf contains several books. Here's how this analogy relates to multidimensional arrays:

- **Bookshelf:** Represents the main array.
- **Shelves:** Each shelf is a sub-array within the main array.
- **Books:** Individual elements within each sub-array.

In this scenario:

- The bookshelf (main array) contains multiple shelves (sub-arrays).
- Each shelf (sub-array) holds a collection of books (elements).

**Visual Representation:**

Consider a 2D array (two-dimensional array) that represents a simple table with 3 rows and 3 columns:

|         | Column 0 | Column 1 | Column 2 |
|---------|----------|----------|----------|
| **Row 0** |    1     |    2     |    3     |
| **Row 1** |    4     |    5     |    6     |
| **Row 2** |    7     |    8     |    9     |

In this table:

- Each row is a sub-array:
  - Row 0: `[1, 2, 3]`
  - Row 1: `[4, 5, 6]`
  - Row 2: `[7, 8, 9]`
- The main array combines these rows into a single structure:
  - `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`

**Accessing Elements:**

To access a specific element in a multidimensional array, you specify the indices corresponding to its position. For example:

- To access the element in the first row and second column (which is `2`):
  - In zero-based indexing: `array[0][1]`
- To access the element in the third row and first column (which is `7`):
  - In zero-based indexing: `array[2][0]`

**Key Points:**

- **Dimensions:** The number of indices needed to access an element defines the array's dimension. A 2D array requires two indices (e.g., `array[row][column]`), while a 3D array would require three (e.g., `array[depth][row][column]`).
- **Use Cases:** Multidimensional arrays are ideal for representing data structures like matrices (used in mathematical computations), grids (such as game boards), and tables (for storing relational data).

**Practical Example:**

```typescript
let ticTacToeBoard: string[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', ' ', 'O']
];
```


In this example:

- Each sub-array represents a row on the tic-tac-toe board.
- To access the element in the second row and third column (`'O'`), you would use:
  - `ticTacToeBoard[1][2]`


Multidimensional arrays are powerful tools for organizing data in structured formats, allowing for efficient data management and access patterns. By visualizing them as collections of arrays within arrays, akin to shelves containing books, it becomes easier to understand their structure and utility.
*/

// Task
/*
Practice time!

Instructions
1.
Please provide type annotations for all the arrays provided in the // Multidimensional arrays: section.
*/

// solution
// Arrays:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBreakfasts: string[] = [
  "fasting",
  "oatmeal",
  "tamago kake gohan",
  "any kind of soup",
];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ["baked potato", "mashed potato"],
];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];
