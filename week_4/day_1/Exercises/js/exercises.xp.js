// GIPHY EXPLORER - Projet d'apprentissage Fetch API + Async/Await

// === CONFIGURATION ===
const API_KEY = "xBrijLwPOaMg8vcs07RzlzxJ0fm2DK3V"; // ←←← Remplace par clé Giphy !!!
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

// Variables globales pour l'apprentissage
let currentSearchTerm = "";

// Fonction principale : recherche de GIFs 

async function searchGifs() {
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    showError("Veuillez entrer un terme de recherche !");
    return;
  }

  currentSearchTerm = query;
  showLoading(true);

  try {
    // Exemple d'URL complet avec tous les paramètres
    const url = `${BASE_URL}?q=${encodeURIComponent(query)}&rating=g&limit=20&api_key=${API_KEY}`;
    // Pour le l'exercice 2, on peut la remplacer par :
    // const url = `${BASE_URL}?q=sun&rating=g&limit=10&offset=2&api_key=${API_KEY}`;
    // Explication des paramètres : sun imposé par l'exercice 2, 10 résultats à partir du 3ème (offset de 2) pour voir la pagination en action.
    // const url = `${BASE_URL}?q=${encodeURIComponent(query)}&rating=g&limit=10&offset=2&api_key=${API_KEY}`;

    // 1. Fetch API - Requête asynchrone
    const response = await fetch(url);
    console.log("📡 Status HTTP :", response.status);
    console.log("✅ OK ?", response.ok);

    // 2. Vérification du statut HTTP (très important en production)
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }
    // 3. Conversion de la réponse en objet JavaScript
    const data = await response.json();

    // 4. Affichage dans la console pour voir la structure (comme demandé dans l'exercice)
    console.log(
      "%c✅ Réponse complète de l'API Giphy :",
      "color: #eab308; font-weight: bold",
    );
    console.log(data);

    // 5. Affichage des GIFs dans l'interface
    displayGifs(data.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des GIFs :", error);
    showError(
      "Impossible de charger les GIFs. Vérifie ta clé API ou ta connexion.",
    );
  } finally {
    showLoading(false);
  }
}

// Affichage des GIFs dans une grille moderne

function displayGifs(gifs) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (gifs.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 text-white/60">
        <p>Aucun GIF trouvé pour "${currentSearchTerm}"</p>
      </div>`;
    return;
  }

  gifs.forEach((gif) => {
    const gifUrl = gif.images.fixed_height.url; // GIF animé de bonne qualité
    const title = gif.title || "GIF sans titre";

    const card = document.createElement("div");
    card.className = "gif-card cursor-pointer";
    card.innerHTML = `
      <div class="gif-container bg-white/10 p-2">
        <img src="${gifUrl}" alt="${title}" loading="lazy">
      </div>
      <p class="text-sm text-white/80 mt-3 line-clamp-2 px-1">${title}</p>
    `;

    // Bonus : clic sur un GIF → ouvre l'original dans un nouvel onglet
    card.addEventListener("click", () => {
      window.open(gif.images.original.url, "_blank");
    });

    container.appendChild(card);
  });
}

// Helpers UI

function showLoading(show) {
  document.getElementById("loading").classList.toggle("hidden", !show);
  document.getElementById("results").classList.toggle("hidden", show);
  document.getElementById("error").classList.add("hidden");
}

function showError(message) {
  const errorEl = document.getElementById("error");
  const resultsEl = document.getElementById("results");
  const loadingEl = document.getElementById("loading");

  loadingEl.classList.add("hidden");
  resultsEl.classList.add("hidden");
  errorEl.classList.remove("hidden");
  document.getElementById("errorMessage").textContent = message;
}

// Lancement automatique avec l'exemple de l'exercice
window.onload = () => {
  if (API_KEY === "TA_CLÉ_API_ICI") {
    alert("Veuillez remplacer 'TA_CLÉ_API_ICI' par ta vraie clé Giphy !!!");
    return;
  }

  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault(); // empêche reload
    searchGifs();
  });

  // Recherche par défaut "hilarious" au chargement (comme dans l'exercice)
  document.getElementById("searchInput").value = "hilarious";
  searchGifs();

  // Pour l'exercice 3 on lance une requete à l'API Star Wars, et vérifie async/await + status HTTP dans la console
  getStarship();

  // Pour l'exercice 4, on teste la fonction asynchrone qui résout une promesse après 2 secondes
  asyncCall();
};

// === EXERCISE 3 ===
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    console.log("📡 Starship Status :", response.status);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    console.log("🛰️ Starship :", data.result);

    document.getElementById("starship").textContent =
      data.result.properties.name;
  } catch (error) {
    console.error("❌ Erreur Starship :", error.message);
  }
}

// === EXERCISE 4 ===
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

// Le resultat attendu dans la console est :
// calling
// (après 2 secondes)
// resolved
