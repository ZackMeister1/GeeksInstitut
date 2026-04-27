// Exercise 1 : Comparison
// objective: Create a function that compares a number to 10 and returns a promise that resolves if the number is less than or equal to 10, and rejects if the number is greater than 10
const compareToTen = (num) => {
  return new Promise((resolve, reject) => {

    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }

  });
};

// Test
// Should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));

//  Explication 
// resolve() si condition validée
// reject() si condition non validée
// .then()  exécute si résolu
// .catch() exécute si rejeté
// 
// 
// 
// 
// 
// 
// Exercise 2 : Promise (4 seconds)
// objective: Create a promise that resolves after 4 seconds with the message "success"

const fourSecondsPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("success");
  }, 4000);

});

fourSecondsPromise.then(result => console.log(result)); 
// Après 4 secondes fourSecondsPromise résout la promesse avec le message "success", qui est ensuite affiché dans la console grâce à .then()
// 
// 
// 
// 
// 
// Exercise 3 : Resolve & Reject
// objective: Create a promise that resolves with the value 3, and another promise that rejects with the message "Boo!"

// 1 : Promise.resolve
const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => console.log(value));
// Promise.resolve crée une promesse qui est immédiatement résolue avec la valeur 3. Ensuite, en utilisant .then(), nous capturons la valeur et l'affichons dans la console.


// 2 : Promise.reject
const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => console.log(error));
// Promise.reject crée une promesse qui est immédiatement rejetée avec le message "Boo!". Ensuite, en utilisant .catch(), nous capturons l'erreur et l'affichons dans la console.

