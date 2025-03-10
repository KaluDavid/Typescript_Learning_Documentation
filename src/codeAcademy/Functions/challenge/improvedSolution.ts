// 2️⃣ Optional Parameters
// Task: Create a function greetUser that takes a name as a required parameter and a greeting message as an optional parameter. If no greeting is provided, use "Hello" as the default.

function greetUser(name: string, greeting?: string) {
  return `${greeting || "Hello"}, ${name}`;
}

console.log(greetUser("Ella"));
console.log(greetUser("Hi", "Ella"));

// 4️⃣ Inferring Return Types

function isEven(num: number) {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// 5️⃣ Explicit Return Types
// Task: Define a function getUserInfo that takes a name (string) and age (number) and explicitly returns an object with these properties

function getUserInfo(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

console.log(getUserInfo("Dhave", 20));
