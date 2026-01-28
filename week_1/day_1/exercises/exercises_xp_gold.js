// ==== Exercise 1 : List of people //

// Part I - Review about arrays // 

const people = ["Greg", "Mary", "Devon", "James"];

// 1_Supprimer Greg du tableau

people.splice(people.indexOf("Greg"), 1);
console.log(people)

// 2_Remplacer "James" par "Jason"

people[people.indexOf("James")] = "Jason";
console.log(people)

// 3_Ajouter mon nom à la fin du tableau:

people.push("Zakaria");
console.log(people)

// 4-Afficher dans la console l’index de "Mary"

console.log(people.indexOf("Mary")); 

// 5_Afficher une copie de people sans "Mary" ni "Zakaria"

const peopleCopy = people.slice(1, 3)
console.log(peopleCopy)

// 6_Afficher l’index de "Foo" (qui n’existe pas dans le tableau)

console.log(people.indexOf("Foo")); // returns -1
people.indexOf("Jason");

// 7_Afficher le dernier élément du tableau sans le supprimer

const last = people[people.length - 1];
console.log(last);
console.log()

// ----Relation entre length et le dernier index ---//
// ----people.length = nombre total d’éléments ---//
// _____Les index commencent à 0____//
// _____Donc : dernier index = length - 1 = my name _//




// Part II - Loops

// 1. Parcourir le tableau people et afficher chaque personne avec console.log //

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2_Parcourir le tableau « people » et quitter la boucle après avoir affiché « Devon »

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

  if (people[i] === "Devon") {
    break;
  }
}



// ===== Exercise 2  Your favorite colors

// Instructions

// 1-Création du tableau 'colors' avec 5 couleurs préférées //

const colors = ["black", "white", "red", "blue", "orange"];


// 2-Boucle sur le tableau pour afficher le classement des couleurs

for (let i = 0; i < colors.length; i++) {
  console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

// 3-Afficher le classement avec les suffixes corrects (1st, 2nd, 3rd...)

const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  const number = i + 1;
  const suffix = suffixes[i];

  console.log("My " + number + suffix + " choice is " + colors[i]);
}


// ===== Exercise 3 : Repeat the question

// Instructions

// 1-Demander un nombre à l'utilisateur et vérifier le type de donnée reçu

let userInput = prompt("Enter a number:");
console.log(typeof userInput); // string ==>> Pour voir le vrai type


// 2-Demander un nouveau nombre tant que la valeur est inférieure à 10

// Logique : je dois demander au moins une fois, donc do..while

let number;

do {
  let input = prompt("Enter a number (>= 10):");
  number = Number(input);
} while (isNaN(number) || number < 10);


// Exercise 4 : Building Management

// Instructions:

// Review about objects
// 1- 
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// 2- Afficher le nombre d'étages dans le bâtiment
console.log(building.numberOfFloors);


// 3- Afficher le nombre d'appartements pour les étages 1 et 3

const floor1 = building.numberOfAptByFloor.firstFloor;
const floor3 = building.numberOfAptByFloor.thirdFloor;

console.log(floor1 + floor3);




// 4- Afficher le nom du deuxième locataire et son nombre de pièces










// 5- Vérifier si le loyer cumulé de Sarah et David > à celui de Dan












// ===== Exercise 4

// ===== Exercise ...