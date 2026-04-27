// Here, we will create a function to read the content of a file and log it to the console. We will use the built-in 'fs' module in Node.js to accomplish this task.

// Import fs module
import fs from 'fs';

// Function to read file
export function readFileContent() {

    const filePath = './files/file-data.txt';

    // Read file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        console.log("File content:");
        console.log(data);
    });
}

