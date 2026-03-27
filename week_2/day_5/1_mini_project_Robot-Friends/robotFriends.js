// 
// Dans ce projet on va respecter:
/*
Array methods
Destructuring
Arrow functions
DOM manipulation
*/


// ROBOTS DATA
// ======================

const robots = [
  { id: 11, name: "Sir Beepington", username: "BeepMaster3000", email: "beep@robot.io" },
  { id: 22, name: "Captain Circuit", username: "VoltHero", email: "circuit@robot.io" },
  { id: 33, name: "Lady Byte", username: "CodeQueen", email: "byte@robot.io" },
  { id: 44, name: "Professor RAM", username: "MemoryBoss", email: "ram@robot.io" },
  { id: 55, name: "Mega Tronix", username: "SteelShadow", email: "mega@robot.io" },
  { id: 44, name: 'Zen Circuit', username: 'FlowBot', email: 'zen@robot.com' },
  { id: 30, name: 'Neo Chrome', username: 'CyberX', email: 'neo@robot.com' },
  { id: 18, name: 'Pixel Storm', username: 'Glitcher', email: 'pixel@robot.com' },
  { id: 70, name: 'Alpha Tron', username: 'MetalMind', email: 'alpha@robot.com' },
  { id: 9, name: 'Quantum Rex', username: 'FutureMech', email: 'quantum@robot.com' },
  { id: 81, name: 'Omega Pulse', username: 'DarkUnit', email: 'omega@robot.com' },
  { id: 66, name: "Glitch McSpark", username: "Error404", email: "glitch@robot.io" },
  { id: 77, name: "Turbo Turing", username: "LogicLord", email: "turbo@robot.io" },
  { id: 101, name: "Zappy McBolt", username: "ThunderBot", email: "zappy@robot.io" },
  { id: 202, name: "Dr. Debug", username: "BugDestroyer", email: "debug@robot.io" },
  { id: 303, name: "Cyber Banana", username: "PeelProtocol", email: "banana@robot.io" }
];


// SELECT DOM ELEMENTS
// ========================

const container = document.getElementById("robotsContainer");
const searchInput = document.getElementById("searchInput");


// DISPLAY FUNCTION
// =================

const displayRobots = (robotsArray) => {

    container.innerHTML = "";

    robotsArray.forEach(({ id, name, email }) => {

        const card = document.createElement("div");
        card.classList.add("card");

         card.style.backgroundImage = `url(images/card-pattern.png)`;

        card.innerHTML = `
            <img src="https://robohash.org/${id}?set=set7" alt="${name}">
            <h2>${name}</h2>
            <p>${email}</p>
        `;

        container.appendChild(card);
    });
};

// Initial load
displayRobots(robots);


// SEARCH FILTER
// ===============

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();

    const filtered = robots.filter(robot =>
        robot.name.toLowerCase().includes(value)
    );

    displayRobots(filtered);
});
