// // ====== Daily Challenge 1

// const form = document.getElementById("libform");
// const storySpan = document.getElementById("story");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const noun = document.getElementById("noun").value;
//   const adjective = document.getElementById("adjective").value;
//   const person = document.getElementById("person").value;
//   const verb = document.getElementById("verb").value;
//   const place = document.getElementById("place").value;

//   if (!noun || !adjective || !person || !verb || !place) {  // Si un champ est vide → stop

//     alert("Please fill all the fields!");
//     return;
//   }

//   const story = `${person} went to ${place} with a ${adjective} ${noun} and decided to ${verb}.`;

//   storySpan.textContent = story;  // On injecte la phrase dans le HTML
// });



// // 5) BONUS----
// const shuffleBtn = document.getElementById("shuffle");

// shuffleBtn.addEventListener("click", function() {

//   const noun = document.getElementById("noun").value;
//   const adjective = document.getElementById("adjective").value;
//   const person = document.getElementById("person").value;
//   const verb = document.getElementById("verb").value;
//   const place = document.getElementById("place").value;

//   if (!noun || !adjective || !person || !verb || !place) {
//     alert("Fill the form first!");
//     return;
//   }

//   const stories = [   // On crée plusieurs histoires
//     `${person} found a ${adjective} ${noun} in ${place} and started to ${verb}.`,
//     `In ${place}, ${person} saw a ${noun} that was very ${adjective} and tried to ${verb}.`,
//     `${person} and the ${adjective} ${noun} went to ${place} to ${verb}.`
//   ];

//   const randomIndex = Math.floor(Math.random() * stories.length);

//   storySpan.textContent = stories[randomIndex];   // On choisit une histoire au hasard

// });

// // NOTE : Math.random càd nombre aléatoire entre 0 et 1
// //        Math.floor càd 0, 1 ou 2 → index aléatoire 



