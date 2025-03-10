//Here, I'll write out every single syntax and code for TS alongside learning

//
/* 0.6 Assigning Types */
const b: Number = 4; //Wrong way to assign types
const a: number = 4; //right way to assign types
console.log(a);

// 07 Array Types
const c: number[] = [];

// 09 Object Basics
// TS does an inference what your object value should look like e.g
// const person = { name: "Dhave", age: 90 };
// console.log(person.name);

// Object person with types
/*const person: {
  name: string;
  age: number;
  isProgrammer: boolean;
} = { name: "Dhave", age: 90 };
*/

// 10 types and interface
type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  };
};

// Inference

interface Person2 {
  name: string;
  age: number;
  friends: string[];
  address: {
    street: string;
  };
}

// 11. defining function
function person3(name: string, name2: string) {
  return;
}
