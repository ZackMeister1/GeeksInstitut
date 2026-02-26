// Game Data

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];



// 1) Add "!" to each username

const usernames = [];

/*
forEach parcourt le tableau
On push chaque username + "!" dans un nouveau tableau
*/

gameInfo.forEach(player => {
    usernames.push(player.username + "!");
});

console.log(usernames);

// Expected result:
// ["john!", "becky!", "susy!", "tyson!"]



// 2) Players with score > 5

const winners = [];

/*
On vérifie si score > 5
Si oui ==> on ajoute le username
*/

gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log(winners);

// Expected result:
// ["becky", "susy"]



// 3) Total Score

/*
On utilise reduce()
reduce accumule une valeur
Ici on additionne tous les scores
*/

const totalScore = gameInfo.reduce((total, player) => {
    return total + player.score;
}, 0); // 0 = valeur initiale

console.log(totalScore);

// Expected result:
// 71
