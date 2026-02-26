// // Exercise 1 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// /*
// 1) Afficher :
// 1# choice is Blue.”
// 2# choice is Green.”
// etc...
// */

// // On utilise forEach pour parcourir le tableau
// colors.forEach((color, index) => {
//     // index commence à 0, donc on ajoute +1
//     console.log(`${index + 1}# choice is ${color}.`);
// });


// /*
// 2) Vérifier si "Violet" existe dans le tableau
// */

// // includes() retourne true ou false
// const hasViolet = colors.includes("Violet");

// if (hasViolet) {
//     console.log("Yeah");
// } else {
//     console.log("No...");
// }






// // Exercise 2 : Colors #2

// const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// /*
// 1) On veut :
// 1st choice is Blue
// 2nd choice is Green
// 3rd choice is Red
// 4th choice is Orange ... etc
// */

// // On utilise forEach + opérateur ternaire
// colors2.forEach((color, index) => {

//     // index +1 car tableau commence à 0
//     const position = index + 1;

//     // Si position est 1,2 ou 3 → suffixe spécial
//     // Sinon → "th"
//     const suffix = position === 1 ? ordinal[1] :
//                    position === 2 ? ordinal[2] :
//                    position === 3 ? ordinal[3] :
//                    ordinal[0];

//     console.log(`${position}${suffix} choice is ${color}.`);
// });





// // Exercise 3 : Analyzing

// // ------1------

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// /*
// Spread operator ... Il "décompose" le tableau

// Résultat :
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// */



// // ------2------

// const country = "USA";
// console.log([...country]);

// /* Une string est iterable
// Donc spread la transforme en tableau

// Résultat :
// ["U", "S", "A"]
// */



// // ------Bonus------

// let newArray = [...[,,]];
// console.log(newArray);

// /*
// [,,] = tableau avec 2 "empty slots"

// Le spread transforme les empty en undefined

// Résultat :
// [undefined, undefined]
// */




// // Exercise 4 : Employees

// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// // 1) map() → nouveau tableau avec message

// const welcomeStudents = users.map(user => {
//     return `Hello ${user.firstName}`;
// });

// console.log(welcomeStudents);



// // 2) filter() → garder seulement les Full Stack Resident

// const fullStackResidents = users.filter(user => {
//     return user.role === "Full Stack Resident";
// });

// console.log(fullStackResidents);



// //3) BONUS : filter + map chainé 
// // On va retourner seulement les lastName

// const residentLastNames = users
//     .filter(user => user.role === "Full Stack Resident")
//     .map(user => user.lastName);

// console.log(residentLastNames);




// // Exercise 5 : Star Wars

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// // 1) On va utiliser reduce() méthode
// // reduce() combine tout en une seule string

// const sentence = epic.reduce((acc, word) => {
//     return acc + " " + word;
// });

// console.log(sentence);

// // Résultat :
// // "a long time ago in a galaxy far far away"




// // Exercise 6 : Employees #2

// const students = [
//     {name: "Ray", course: "Computer Science", isPassed: true}, 
//     {name: "Liam", course: "Computer Science", isPassed: false}, 
//     {name: "Jenner", course: "Information Technology", isPassed: true}, 
//     {name: "Marco", course: "Robotics", isPassed: true}, 
//     {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//     {name: "Jamie", course: "Big Data", isPassed: false}
// ];

// // 1) filter → garder ceux qui ont réussi

// const passedStudents = students.filter(student => {
//     return student.isPassed === true;
// });

// console.log(passedStudents);


// // 2) BONUS : filter + forEach
// // On va afficher le message de félicitations

// students
//     .filter(student => student.isPassed)
//     .forEach(student => {
//         console.log(
//             `Good job ${student.name}, you passed the course in ${student.course}`
//         );
//     });
