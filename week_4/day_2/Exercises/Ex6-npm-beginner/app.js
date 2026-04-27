// Exercise 6: Simple NPM Package Usage

// Objective: Use the 'chalk' package to print colorful messages in the console.
// Import chalk (ES6 syntax because chalk uses ES modules)
import chalk from 'chalk';

// Print colorful messages

// Basic colored text
console.log(chalk.green("Success! Everything is working."));

// Bold text
console.log(chalk.blue.bold("This is a bold blue message"));

// Background color + text color
console.log(chalk.bgRed.white("Error: Something went wrong!"));

// Underlined text
console.log(chalk.yellow.underline("Warning: Check your input"));

// Combine multiple styles
console.log(
    chalk.bgBlue.white.bold(" INFO ") + " " + chalk.cyan("Application started successfully")
);

// Fun example with multiple colors
console.log(
    chalk.magenta("Welcome ") +
    chalk.green("to ") +
    chalk.yellow("Node.js ") +
    chalk.red("with ") +
    chalk.blue("Chalk!")
);

