// Exercise 2: Advanced Module Usage using ES6 module syntax

// Import the array from data.js using ES6 syntax
import { persons } from "./data.js"; // use './' to reference same folder

// Function to calculate and print average age
function calculateAverageAge(personArray) {
  // Step 6a: Sum all ages using reduce
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  // Step 6b: Divide by number of persons
  const averageAge = totalAge / personArray.length;

  // Step 6c: Print the result
  console.log(`Average age of all persons: ${averageAge}`);
}

// Use the function with imported array
calculateAverageAge(persons);
