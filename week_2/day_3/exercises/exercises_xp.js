// Execice 1: Location
// Analyse

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { 
    name, 
    location: { 
        country, 
        city, 
        coordinates: [lat, lng] 
    } 
} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);



/* Explication

On fait du destructuring profond
On extrait :
name
country
city

lat (index 0 du tableau)
lng (index 1 du tableau)

Output
I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207) */




// Exercise 2: Display Student Info

function displayStudentInfo(objUser){
    
    // On destructure directement l'objet reçu en paramètre
    const { first, last } = objUser;

    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


/* 
Explication : On extrait first et last
On retourne une string formatée

Output
Your full name is Elie Schoppik
*/




// Exercise 3: User & id

const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
};


// 1) On va transformer user object into an array

// Object.entries transforme un objet en tableau de paires [clé, valeur]
const usersArray = Object.entries(users);

console.log(usersArray);

/*
[
 ['user1', 18273],
 ['user2', 92833],
 ['user3', 90315]
]
*/



// 2) On va multiplier les id par 2 
/* On destructure [key, value]
Et on retourne un nouveau tableau avec value * 2*/

const updatedUsers = Object.entries(users).map(([key, value]) => {
    return [key, value * 2];
});

console.log(updatedUsers);

/*
[
 ['user1', 36546],
 ['user2', 185666],
 ['user3', 180630]
]
*/





// Exercise 4: Person Class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

/* 
member est une instance de classe
En JS, une instance est un object

Output
object*/




// Exercise 5: Dog Class

// OPTION 2

class Labrador extends Dog {
  constructor(name, size) {
    super(name); // obligatoire pour appeler le constructeur parent
    this.size = size;
  }
};

/* Pourquoi ?

Quand on utilise extends, on doit appeler super() avant d’utiliser this

Les autres options : 
Pas de super()
Mauvais paramètre
this utilisé avant super()
*/



// Exercise 6: Challenges

// 1) Comparaison

// [2] === [2]    // false
// {} === {}      // false

/* Pourquoi ?
Les tableaux et objets sont comparés par référence, pas par valeur

Même contenu ≠ même référence en mémoire
*/

// 2) Valeur des objets

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

/* Explication

object2 et object3 pointent vers le même objet que object1

object4 est un objet séparé

Donc :
object2 ==> 4

object3 ==>4

object4 ==> 5*/



// 1) Class Animal

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}


// 2) Class Mamal extends Animal

class Mammal extends Animal {

    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}


// 3) FarmerCow extends

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));


/*
Moooo I'm a cow, named Lily and I'm brown and white
 */






