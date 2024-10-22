// Define an interface for a person
interface Person {
    name: string;
    age: number;
}

// Create a person object
let person: Person = {
    name: "Alice",
    age: "twenty-five" // Error: Type 'string' is not assignable to type 'number'
};

console.log(person);