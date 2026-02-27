// Exercise 3 : JSON Mario

// 1) Convert JS Object ==> JSON
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

// Convert to JSON
const jsonGame = JSON.stringify(marioGame);

console.log(jsonGame);


/* Que deviennent les objets imbriqués ?

Ils sont convertis aussi en JSON. Tout devient : 
des chaînes de caractères avec des clés entre guillemets

sans fonctions

Exemple :

{
  "detail":"An amazing game!",
  "characters":{
    "mario":{...}
  }
}*/




// 2) Pretty Print JSON

const prettyJsonGame = JSON.stringify(marioGame, null, 2);

console.log(prettyJsonGame);


/* Explication : JSON.stringify(obj, null, 2)

null ==> pas de transformation

2 ==> indentation de 2 espaces

Résultat plus lisible*/





// 3) Debugger / Breakpoint

/* Comment faire : 
On ouvre DevTools
Onglet Sources
On clique sur notre fichier JS
On clique sur le numéro de ligne pour ajouter un breakpoint
On recharge la page
On inspecte la variable prettyJsonGame

Important
Après JSON.stringify : Ce n’est plus un objet. C’est une string

Si je veux retransformer en objet :

const parsedGame = JSON.parse(prettyJsonGame);*/