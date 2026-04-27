// RANDOM GIPHY APP
// Concepts : Fetch API + Async/Await + Try/Catch + DOM manipulation

// === 1. Fonction pour récupérer un GIF aléatoire ===
async function getRandomGif(category) {
const API_KEY = "PAST YOUR API KEY HERE";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}`;


  try {
    console.log("🚀 Fetch en cours pour :", category);

    const response = await fetch(url);

    console.log("📡 Status HTTP :", response.status);

    // Vérification du statut HTTP
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    console.log("✅ Données reçues :", data);

    // Accès au GIF
    const gifUrl = data.data.images.fixed_height.url;

    // Affichage du GIF
    displayRandomGif(gifUrl);

  } catch (error) {
    console.error("❌ Erreur lors du fetch :", error.message);
  }
}


// === Fonction pour afficher un GIF avec un bouton DELETE ===
function displayRandomGif(gifUrl) {
  const container = document.getElementById("randomGifs");

  // Création d'un bloc pour chaque GIF
  const gifDiv = document.createElement("div");
  gifDiv.style.marginBottom = "20px";

  gifDiv.innerHTML = `
    <img src="${gifUrl}" style="display:block; margin-bottom:10px;">
    <button class="deleteBtn">DELETE</button>
  `;

  // Bouton DELETE pour supprimer le GIF
  const deleteBtn = gifDiv.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", () => {
    gifDiv.remove();
  });

  // Ajout dans le container 
  container.appendChild(gifDiv);
}


// === Gestion du formulaire pour récupérer un GIF aléatoire ===
document.getElementById("gifForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const input = document.getElementById("categoryInput");
  const category = input.value.trim();

  if (!category) {
    alert("Veuillez entrer une catégorie !");
    return;
  }

  // Appel API
  getRandomGif(category);

  // Reset input
  input.value = "";
});


// === Bouton DELETE ALL ===
document.getElementById("deleteAllBtn").addEventListener("click", () => {
  const container = document.getElementById("randomGifs");

  // Supprime tous les GIFs
  container.innerHTML = "";

  console.log("🗑️ Tous les GIFs ont été supprimés");
});
