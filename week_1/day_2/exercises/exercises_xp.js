// =========== Exercise 1 : Find the numbers divisible by 23 ===================

// QUESTIONS 1,2,3, and 4

// function displayNumbersDivisible(){
//     let total = 0;

//     for (let i = 0; i <= 500; i++ ) {
//         // Si i est divisible par 23
//         if (i % 23 === 0) {
//             console.log(i);
//             total += i;
//         }
//      }
    
//      console.log("total of divisible number is :", total)
//     }
//     displayNumbersDivisible();


// 5- Bonus: Add a parameter divisor to the function.

// function displayNumbersDivisible(divisor){
//     let total = 0;

//     for (let i = 0; i <= 500; i++) {
//         if (i % divisor === 0) {
//             console.log(i);
//             total += i;
//         }
//     }

//     console.log("total", total);
// }

// displayNumbersDivisible(23);
// displayNumbersDivisible(3);
// displayNumbersDivisible(45);



// ================= Exercise 2 : Shopping List =========================



// Instructions

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana", "orange", "apple"];
 
// function myBill() {
//   let total = 0;

//   for (let item of shoppingList) {
//     if (item in stock && stock[item] > 0) {
//       total += prices[item];
//       stock[item]--;  // on diminue le stock
//     }
//   }

//   return total;
// }

// console.log(myBill());



// ================== Exercise 3 : What’s in my wallet ? =====================



// function changeEnough(itemPrice, amountOfChange) {

//   const values = [0.25, 0.10, 0.05, 0.01];
  
//   let myTotalMoney = 0;

//   for (let i = 0; i < amountOfChange.length; i++) {
//     // (Nombre de pièces que j'ai) MULTIPLIÉ PAR (Sa valeur)
//     let moneyFromThisCoin = amountOfChange[i] * values[i]; 
//     myTotalMoney += moneyFromThisCoin;
//   }

//    // Mon argent est suffisant pour le prix ??
//    if (myTotalMoney >= itemPrice) {
//     return true;   // Yes, I have enough 
//    } else {
//     return false;   // No, I am too poor for this
//    }
// }


// changeEnough(4.25, [25, 20, 5, 0]);    // true
// changeEnough(14.11, [2, 100, 0, 0]);   // false
// changeEnough(0.75, [0, 0, 20, 5]);     // true



// ============================ Exercise 4 Vacations Costs ===============================
// // 1--------

// function hotelCost() {
//   let nightsAtHotel;

//   do {
//     nightsAtHotel = prompt("how many nights?");
//   } while (isNaN(nightsAtHotelAtHotel) || nightsAtHotelAtHotel === "");

//   return Number(nightsAtHotelAtHotel) * 140;
// }

// // 2--------
// function planeRideCost() {
//   let destination;

//   do {
//     destination = prompt("What is your destination?");
//   } while (!destination);

// if (destination === "London") {
//     return 183;
//   } else if (destination === "Paris") {
//     return 220;
//   } else {
//     return 300;
//   }
// }

// // 3--------

// function rentalCarCost() {
//   let carRentDays;
//   do {
//     carRentDays = prompt("how many days you want to rent the car");
//   } while (isNaN(carRentDays) || carRentDays === "");

//   let carCost = Number(carRentDays) * 40;

//   if (carRentDays > 10) {
//     carCost = carCost * 0.95;   // 5% discount
//   }

//   return carCost;

// }

// // 4-------

// function totalVacationCost() {
//   let hotel = hotelCost();
//   let plane = planeRideCost();
//   let car = rentalCarCost();

//   console.log("The hotel cost: $" + hotel);
//   console.log("The plane cost: $" + plane);
//   console.log("The car cost: $" + car);
//   console.log("Total vacation cost: $" + (hotel + plane + car));
// }

// totalVacationCost();


//----------------------THE BONUS-------------------------


// function hotelCost(nightsAtHotel) {
//   return nightsAtHotel * 140;
// }

// function planeRideCost(destination) {
//   if (destination === "London") {
//     return 183;
//   } else if (destination === "Paris") {
//     return 220;
//   } else {
//     return 300;
//   }
// }

// function rentalCarCost(carRentDays) {
//   let carCost = carRentDays * 40;

//   if (carRentDays > 10) {
//     carCost = carCost * 0.95;
//   }

//   return carCost;
// }


// function totalVacationCost() {
//   let nightsAtHotel;
//   let destination;
//   let carRentDays;

//   do {
//     nightsAtHotel = prompt("How many nights?");
//   } while (isNaN(nightsAtHotel) || nightsAtHotel === "");

//   do {
//     destination = prompt("What is your destination?");
//   } while (!destination);

//   do {
//     carRentDays = prompt("How many days you want to rent the car");
//   } while (isNaN(carRentDays) || carRentDays === "");

//   let hotel = hotelCost(Number(nightsAtHotel));
//   let plane = planeRideCost(destination);
//   let car = rentalCarCost(Number(carRentDays));

//   console.log("The hotel cost: $" + hotel);
//   console.log("The plane cost: $" + plane);
//   console.log("The car cost: $" + car);
//   console.log("Total vacation cost: $" + (hotel + plane + car));
// }

// totalVacationCost();


// // =============== Exercise 5 : Users ==============

// // 1-- Retrieve the div and console.log it
// let div = document.getElementById("container");
// console.log(div);

// // 2-- Change "Pete" to "Richard"
// let lists = document.querySelectorAll(".list");
// lists[0].children[1].textContent = "Richard";

// // 3-- Delete the second <li> of the second <ul>
// lists[1].children[1].remove();

// // 4-- Change the first <li> of each <ul> to your name
// for (let ul of lists) {
//   ul.children[0].textContent = "Zak";
// }

// // 5-- Add class student_list to both <ul>
// for (let ul of lists) {
//   ul.classList.add("student_list");
// }

// // 6-- Add classes university and attendance to the first <ul>
// lists[0].classList.add("university", "attendance");

// // 7-- Style the div
// container.style.backgroundColor = "lightblue";
// container.style.padding = "10px";

// // 8-- Hide the <li> that contains “Dan”
// let secondUlList = lists[1].children;
// secondUlList[1].style.display = "none"; 

// // 9-- Add a border to “Richard”
// lists[0].children[1].style.border = "1px solid black";

// // 10-- Change font size of the body
// document.body.style.fontSize = "18px";

// // BONUS
// if (container.style.backgroundColor === "lightblue") {
//   alert("Hello John and Zak");
// }


// // ====== Exercise 6 : Change the navbar ======

// // 2--- Change the id using setAttribute

// let navDiv = document.getElementById("navBar");
// navDiv.setAttribute("id", "socialNetworkNavigation");

// // 3---- ADDING a new <li> to the <ul>
// // 3-1---- Create <li>
// let newLi = document.createElement("li");

// // 3-2---- Create text node with “Logout”
// let logoutText = document.createTextNode("Logout");

// // 3-3---- Append text node to <li>
// newLi.appendChild(logoutText);

// // 3-4---- Append <li> to <ul>
// let ul = document.querySelector("ul");
// ul.appendChild(newLi);

// // 4---- Retrieve first and last <li> && Display their text
// let firstLi = ul.firstElementChild;
// let lastLi = ul.lastElementChild;

// console.log(firstLi.textContent);
// console.log(lastLi.textContent);



// ========= Exercise 7 : My Book List ==========


// // 2----- Create the array of books
// let allBooks = [
//   {
//     title: "Le Petit Prince",
//     author: "Antoine de Saint-Exupéry",
//     image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
//     alreadyRead: true
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
//     alreadyRead: false
//   }
// ];


// // 3------ Select the section
// let section = document.querySelector(".listBooks");

// // 4------ Loop through the books
// for (let book of allBooks) {

//   // Create a div for each book
//   let bookDiv = document.createElement("div");

//   // Create paragraph for title and author
//   let bookInfo = document.createElement("p");
//   bookInfo.textContent = book.title + " written by " + book.author;

//   // Create image
//   let bookImage = document.createElement("img");
//   bookImage.src = book.image;
//   bookImage.style.width = "100px";

//   // If already read, set text color to red
//   if (book.alreadyRead === true) {
//     bookInfo.style.color = "red";
//   }

//   // Append elements
//   // Add text + image to div
//   bookDiv.appendChild(bookInfo);
//   bookDiv.appendChild(bookImage);
  
//   // Add div to section
//   section.appendChild(bookDiv);
// }



























// ===== Exercise ...