// Objective: Create a module that displays colorful messages in the console using chalk
// Import chalk (ES module)
import chalk from 'chalk';

// Create a function to display colorful message
export function showMessage() {
    console.log(chalk.green("Success! 🎉"));
    console.log(chalk.blue.bold("Learning Node.js Modules"));
    console.log(chalk.bgRed.white("Important Message!"));
}

