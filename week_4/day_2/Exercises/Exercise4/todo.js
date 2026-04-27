// Exercise 4: Todo List using ES6 module syntax

// objective: Create a simple Todo List application using ES6 classes and modules

// Define a TodoList class with methods to manage tasks
export class TodoList {
  constructor() {
    // Array to store tasks
    this.tasks = [];
  }

  // Method to add a task
  addTask(description) {
    const task = {
      description, // task description
      completed: false, // default is not completed
    };
    this.tasks.push(task); // add to tasks array
    console.log(`Task added: "${description}"`);
  }

  // Method to mark a task as complete by index
  completeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Task completed: "${this.tasks[index].description}"`);
    } else {
      console.log("Invalid task index:", index);
    }
  }

  // Method to list all tasks
  listTasks() {
    console.log("\nTodo List:");
    this.tasks.forEach((task, index) => {
      // Show task index, description, and status
      const status = task.completed ? "[✔]" : "[ ]";
      console.log(`${index + 1}. ${status} ${task.description}`);
    });
    console.log(""); // blank line for readability
  }
}
