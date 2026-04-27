// Exercise 4: Todo List using ES6 module syntax
// objective: Create a simple Todo List application using ES6 classes and modules

// Import the TodoList class
import { TodoList } from "./todo.js";

// Create an instance of the class
const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask("Learn Node.js modules");
myTodoList.addTask("Write a small project");
myTodoList.addTask("Test the Todo List");

// Mark some tasks as complete
myTodoList.completeTask(0); // mark first task as complete
myTodoList.completeTask(2); // mark third task as complete

// List all tasks
myTodoList.listTasks();
