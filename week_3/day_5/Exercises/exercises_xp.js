// We learn async/await & fetch API by building a Star Wars character finder app!

const btn = document.getElementById("btn");
const characterDiv = document.getElementById("character");
const loading = document.getElementById("loading");

btn.addEventListener("click", getCharacter);

// we use async/await to handle asynchronous operations in a more readable way
async function getCharacter() {

  loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`;
  characterDiv.innerHTML = "";

  try {
    const randomId = Math.floor(Math.random() * 83) + 1;

    // Get character 
    // we use fetch to make an API call to the Star Wars API (SWAPI) to get a random character's data
    const response = await fetch(`https://swapi.tech/api/people/${randomId}`);
    const data = await response.json();
    const char = data.result.properties;

    // Get homeworld 
    const homeworldResponse = await fetch(char.homeworld);
    const homeworldData = await homeworldResponse.json();

    // Display 
    characterDiv.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Height:</strong> ${char.height}</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
      <p><strong>Birth Year:</strong> ${char.birth_year}</p>
      <p><strong>Homeworld:</strong> ${homeworldData.result.properties.name}</p>
    `;

    loading.textContent = "";

  } catch (error) {
    loading.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Error loading data`;
  }
}
