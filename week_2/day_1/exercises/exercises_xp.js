// // ===== Exercise 1

// // #1
// function funcOne() {
//     let a = 5;
//     if (a > 1) {
//         a = 3;
//     }

//     alert(`inside the funcOne function ${a}`);
// }

// // Prediction: a vaut 3
// // Parce que la variable a est modifiée dans le if (a = 3)

// funcOne(); // → 3

// // #1.2
// // Si on remplace let par const -> ERREUR
// // Parce qu'une variable const ne peut pas être réassignée




// // #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // Prediction:
// // Premier funcThree() → 0
// // funcTwo() change la valeur de a à 5
// // Deuxième funcThree() → 5

// funcThree(); // 0
// funcTwo(); // unedefined
// funcThree(); // 5

// // #2.2
// // Si a est déclaré avec const -> ERREUR dans funcTwo()
// // car on ne peut pas modifier une constante




// // #3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // Prediction:
// // funcFour() crée une variable globale a = "hello"
// // funcFive() affiche "hello"

// funcFour();
// funcFive(); // hello




// // #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // Prediction:
// // La variable a dans la fonction est locale
// // Elle ne change pas la variable globale
// // Donc affiche "test"

// funcSix(); // test

// // #4.2
// // Si on met const au lieu de let -> aucun problème
// // car on ne modifie pas la variable




// // #5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }

// alert(`outside of the if block ${a}`);

// // Prediction:
// // Dans le bloc -> 5
// // En dehors -> 2
// // Parce que let est limité au bloc

// // #5.2
// // Si const -> même comportement
// // const est aussi limité au bloc




// // ===== Exercise 2

// // 1- Arrow function
// const winBattle = () => true;

// // 2- Variable
// let experiencePoints;

// // 3- Ternary operator
// experiencePoints = winBattle() ? 10 : 1;

// // 4- Log
// console.log(experiencePoints); // 10




// // ===== Exercise 3

// const isString = (value) => typeof value === "string";

// console.log(isString("hello")); // true
// console.log(isString([1, 2, 4, 0])); // false




// // ===== Exercise 4

// const sum = (a, b) => a + b;

// console.log(sum(5, 3)); // 8




// // ===== Exercise 5
// // 1-
// function kgToGrams(kg) {
//     return kg * 1000;
// }

// console.log(kgToGrams(2) + " g"); // 2000 g


// // 2-
// const kgToGramsExp = function(kg) {
//     return kg * 1000;
// };

// console.log(kgToGramsExp(3) + " g"); // 3000 g


// // 3-
// // Function declaration is hoisted (can be used before definition)
// // Function expression is not hoisted.


// // 4- Arrow function
// const kgToGramsArrow = kg => kg * 1000 + " g";

// console.log(kgToGramsArrow(7)); // 7000 g




// // ===== Exercise 6

// (function(children, partner, location, job) {
//     const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    
//     document.body.innerHTML += `<p>${sentence}</p>`;
// })(2, "Emma", "Paris", "Developer");




// // ===== Exercise 7

// (function(userName) {

//     const navbar = document.getElementById("navbar");

//     const userDiv = document.createElement("div");
//     userDiv.innerHTML = `<span>Welcome ${userName}</span>
//         <img src="https://pixabay.com/images/download/alex_agrico-man-8222531_1920.jpg" alt="profile">`;

//     navbar.appendChild(userDiv);

// })("John");




// // ===== Exercise 8
// // PART 1
// function makeJuice(size) {

//     function addIngredients(ing1, ing2, ing3) {
//         document.body.innerHTML += 
//         `<p>The client wants a ${size} juice containing ${ing1}, ${ing2}, ${ing3}.</p>`;
//     }

//     addIngredients("apple", "banana", "orange");
// }

// makeJuice("large");


// // PART 2
// function makeJuice(size) {

//     let ingredients = [];

//     function addIngredients(ing1, ing2, ing3) {
//         ingredients.push(ing1, ing2, ing3);
//     }

//     function displayJuice() {
//         document.body.innerHTML += 
//         `<p>The client wants a ${size} juice containing ${ingredients.join(", ")}.</p>`;
//     }

//     addIngredients("apple", "banana", "orange");
//     addIngredients("mango", "pineapple", "kiwi");

//     displayJuice();
// }

// makeJuice("medium");


