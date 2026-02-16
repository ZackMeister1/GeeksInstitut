// ====== Daily Challenge 1

// 1- Création d'une variable 'sentence' contenant les mots "not" et "bad"
let sentence = "The movie is not that bad, I like it";

// 2- Trouver la position de la première occurrence du mot "not"
let wordNot = sentence.indexOf("not");

// 3- Trouver la position de la première occurrence du mot "bad"
let wordBad = sentence.indexOf("bad");

// 4- Si "bad" est après "not", remplacer "not...bad" par "good"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let before = sentence.slice(0, wordNot);
  let after = sentence.slice(wordBad + 3);   // càd On part de 22 + 3 = 25  // 3 = length of "bad" 

  let newSentence = before + "good" + after;

  console.log(newSentence);
}


// 5- Si "bad" n'est pas après "not" (ou absents), afficher la phrase d'origine
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let before = sentence.slice(0, wordNot);
    let after = sentence.slice(wordBad + 3);

    let newSentence = before + "good" + after;

    console.log(newSentence);
} else {
    console.log(sentence);
}


// ====== Daily Challenge 2

// 1- Générer le motif (pattern) suivant dans la console
console.log("*");
console.log("* *");
console.log("* * *");
console.log("* * * *");
console.log("* * * * *");
console.log("* * * * * *");

// 2- Générer le motif de deux manières différentes

// Méthode 1 — Une seule boucle
let line = "";

for (let i = 1; i <= 6; i++) {
  line += "* ";
  console.log(line);
}


// Méthode 2 — Nested loops
for (let i = 1; i <= 6; i++) {
  line += "* ";
  
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

// 3- Challenge en autonomie (sans aide externe)
// "I did 95% of the exercise on my own"




// Créer un fichier HTML structuré relié à un fichier JS

// Écrire une fonction JavaScript qui prend un paramètre : myAge

// Dans la fonction, afficher dans la console l’âge de ma mère et de mon père

// Ma mère a le double de mon âge

// Mon père a 1,2 fois l’âge de ma mère

// Appeler la fonction


// function calculerAgesParents(myAge) {
//     // Calcul de l'âge de la mère (double)
//     let mamanAge = myAge * 2;

//     // Calcul de l'âge du père (1,2 fois l'âge de la mère)
//     let papaAge = mamanAge * 1.2;

//     // Affichage dans la console
//     console.log("Mon âge : " + myAge + " ans");
//     console.log("L'âge de ma mère est : " + mamanAge + " ans");
//     console.log("L'âge de mon père est : " + papaAge + " ans");
// }

// calculerAgesParents(30);

// function userInfo(userName, userAge) {
//     if (userName === "Sarah") {
//         let result = "Hey " + userName;
//         return result;
//     } else {
//         return "You are not the right person";
//     }
// }

// let girlInfo = userInfo("Tarik", 22);
// console.log(girlInfo); //Hey Sarah



// Exercice 2

// Créer un fichier HTML structuré relié à un fichier JS

// Écrire une fonction JavaScript qui prend un paramètre : myAge

// Dans la fonction, retourner l’âge de ma mère (elle a le double de mon âge)

// Appeler la fonction

// Dans le scope global, afficher le résultat avec console.log


// function monAge (myAge) {
//   let motherAge = (myAge * 2);

//   return motherAge;
// }

// let resultat = monAge(30);

// console.log("L'age de ma mère est : " + resultat);
