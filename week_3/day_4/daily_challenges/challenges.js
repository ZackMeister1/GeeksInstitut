// Daily Challenges - Day 1

// FUNCTION 1 : makeAllCaps
// objective: receive an array of words and return an array of the words in uppercase
const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {

    const allStrings = arr.every(item => typeof item === "string");

    if (!allStrings) {
      reject("Error: Not all elements are strings");
    } else {
      const uppercased = arr.map(word => word.toUpperCase());
      resolve(uppercased);
    }

  });
};


// FUNCTION 2 : sortWords
// objective: receive an array of words and return the array sorted in alphabetical order
const sortWords = (arr) => {
  return new Promise((resolve, reject) => {

    if (arr.length <= 4) {
      reject("Error: Array length must be greater than 4");
    } else {
      const sorted = arr.sort();
      resolve(sorted);
    }

  });
};


// Tests

// contains numbers, so reject
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   result: "Error: Not all elements are strings"
// utility of this test is to verify that the first function is working properly and rejecting when it should, even if the second function is not reached


// length <= 4 so reject
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   result: "Error: Array length must be greater than 4"
// utility of this test: even if the first function works, the second function can still fail, so we need to catch errors in both functions


// success
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   result: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
// utility of this test is to verify that both functions work together properly and return the expected result when given valid input


// // Ce que je montres
// every()  vérifier les types
// map()  transformer
// sort()  trier
// Promises chaining





// 2nd Daily Challenge (Morse Code)
// Étape 1 : Convert JSON to JS
// OBJECTIVE: receive a JSON string of Morse code and return a JS object
const toJs = (morseJSON) => {
  return new Promise((resolve, reject) => {

    const morseObj = JSON.parse(morseJSON);

    if (Object.keys(morseObj).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseObj);
    }

  });
};


// Étape 2 : Convert text to Morse code
// objective: receive a string and a Morse code object, return an array of the Morse code translation of the string
const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {

    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {

      if (char === " ") continue;

      if (!morseJS[char]) {
        reject(`Error: Character "${char}" not found in Morse`);
        return;
      }

      translation.push(morseJS[char]);
    }

    resolve(translation);

  });
};

// 4) dom manipulation to display the Morse code translation
// objective: receive an array of Morse code and display it in the page, each code on a new line
const joinWords = (morseTranslation) => {

  const output = document.createElement("div");

  output.innerHTML = morseTranslation.join("<br>");

  document.body.appendChild(output);
};

// 5) Chain the three functions together
// objetif : convertir une phrase en Morse et l'afficher dans la page
toJs(morse)
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));

// Résultat attendu
// Si user tape :
// hello


//  Affichage dans la page :

// ....
// .
// .-..
// .-..
// ---

// Ce que je montre ici 
// Concept	                       Utilisation
// JSON.parse	              conversion JSON → JS
// Promises     	          toutes les fonctions
// reject / resolve	            gestion erreurs
// Boucle for...of	            parcourir string
// DOM	                        affichage final
// Chaining	                         .then()


