// // ====== Daily Challenge  =======

// // 1---- On crée un tableau avec les planètes
// const planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune"
// ];

// //----- On sélectionne la section dans HTML
// const section = document.querySelector(".listPlanets");

// // 2--- Boucle pour créer une div pour chaque planète
// for (let i = 0; i < planets.length; i++) {

//   const planetDiv = document.createElement("div");  //  On crée une div
//   planetDiv.classList.add("planet");    //  On ajoute la classe planet
  
//   //  On ajoute le nom de la planète dans div
//   planetDiv.textContent = planets[i];

//   // 3--- On donne une couleur différente selon la planète
//   const colors = ["gray", "yellow", "blue", "red", "orange", "gold", "lightblue", "darkblue"];
//   planetDiv.style.backgroundColor = colors[i];

//   // 4--- On ajoute la div dans la section
//   section.appendChild(planetDiv);
// }


//   // 5--- Bonus

// const planets = [
//   { name: "Mercury", color: "gray", moons: 0 },
//   { name: "Venus", color: "yellow", moons: 0 },
//   { name: "Earth", color: "blue", moons: 1 },
//   { name: "Mars", color: "red", moons: 2 },
//   { name: "Jupiter", color: "orange", moons: 4 },
//   { name: "Saturn", color: "gold", moons: 3 },
//   { name: "Uranus", color: "lightblue", moons: 2 },
//   { name: "Neptune", color: "darkblue", moons: 1 }
// ];

// const section = document.querySelector(".listPlanets");

// for (let i = 0; i < planets.length; i++) {

//   const planetDiv = document.createElement("div");
//   planetDiv.classList.add("planet");

//   planetDiv.textContent = planets[i].name;
//   planetDiv.style.backgroundColor = planets[i].color;

//   // --- Création des lunes ---
//   for (let j = 0; j < planets[i].moons; j++) {

//     const moonDiv = document.createElement("div");
//     moonDiv.classList.add("moon");

// // Math.random() donne un nombre entre 0 et 1
// // On le multiplie par 70 pour positionner la lune autour de la planète
//     moonDiv.style.top = Math.random() * 70 + "px";
//     moonDiv.style.left = Math.random() * 70 + "px";

//     planetDiv.appendChild(moonDiv);
//   }

//   section.appendChild(planetDiv);
// }





