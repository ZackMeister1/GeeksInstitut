// ===== Exercise 1

// // 1) ----
// const h1 = document.querySelector("h1");
// console.log(h1);

// // 2) ----
// const article = document.querySelector("article");
// const lastParagraph = article.lastElementChild;
// lastParagraph.remove();

// // 3) ----
// const h2 = document.querySelector("h2");

// h2.addEventListener("click", function() {
//   h2.style.backgroundColor = "red";
// });

// // 4) ----
// const h3 = document.querySelector("h3");

// h3.addEventListener("click", function() {
//   h3.style.display = "none";
// });

// // 5) ----
// const button = document.getElementById("boldButton");

// button.addEventListener("click", function() {

//   const paragraphs = document.querySelectorAll("p");

//   for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.fontWeight = "bold";
//   }

// });

// // 6) ----
// h1.addEventListener("mouseover", function() {

//   const randomSize = Math.floor(Math.random() * 100);

//   h1.style.fontSize = randomSize + "px";

// });

// // 7) ----
// const secondParagraph = document.querySelectorAll("p")[1];

// secondParagraph.addEventListener("mouseover", function() {
//   secondParagraph.classList.add("fade");
// });





// ===== Exercise 2

// // 1) ----
// const form = document.querySelector("form");
// console.log(form);

// // 2) ----
// const firstNameInput = document.getElementById("fname");
// const lastNameInput = document.getElementById("lname");

// console.log(firstNameInput);
// console.log(lastNameInput);

// // 3) ----
// const firstNameByName = document.getElementsByName("firstname")[0];
// const lastNameByName = document.getElementsByName("lastname")[0];

// console.log(firstNameByName);
// console.log(lastNameByName);

// // 4) ----
// const ul = document.querySelector(".usersAnswer");

// form.addEventListener("submit", function(event) {    // Détecte quand on clique sur Submit

// // Bloquer le rechargement
// // Sinon la page recharge → tout disparaît    
// event.preventDefault();    

//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;
//   if (firstName === "" || lastName === "") {   // Si un champ est vide → message d’erreur

//     alert("Please fill all fields");
//     return;
//   }

//   const li1 = document.createElement("li");
//   li1.textContent = firstName;

//   const li2 = document.createElement("li");
//   li2.textContent = lastName;

//   ul.appendChild(li1);
//   ul.appendChild(li2);

// });





// // ===== Exercise 3

// // 1) ----
// let allBoldItems;

// // 2) ----
// function getBoldItems() {
//   const paragraph = document.getElementById("myParagraph");
//   allBoldItems = paragraph.querySelectorAll("strong");
// }

// // 3) ----
// function highlight() {
//   for (let i = 0; i < allBoldItems.length; i++) {
//     allBoldItems[i].style.color = "blue";
//   }
// }


// // 4) ----
// function returnItemsToDefault() {
//   for (let i = 0; i < allBoldItems.length; i++) {
//     allBoldItems[i].style.color = "black";
//   }
// }


// // 5) ----
// getBoldItems();

// const paragraph = document.getElementById("myParagraph");

// paragraph.addEventListener("mouseover", highlight);
// paragraph.addEventListener("mouseout", returnItemsToDefault);





// // ===== Exercise 4

// const form = document.getElementById("MyForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();   // Sinon la page recharge automatiquement

//   const radiusInput = document.getElementById("radius");
//   const volumeInput = document.getElementById("volume");

//   const radius = radiusInput.value;
//   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//     // (4 / 3) → formule
//     // Math.PI → π
//     // Math.pow(radius, 3) → rayon³
    
//   volumeInput.value = volume.toFixed(2);
//     // .value → on écrit dans l’input
//     // toFixed(2) → 2 chiffres après la virgule
// });
