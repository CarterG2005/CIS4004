// Grab all the elements
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const resultImage = document.getElementById("resultImage");
const playBtn = document.getElementById("playBtn");
const volumeSlider = document.getElementById("volume");
const dropdowns = document.querySelectorAll(".dropdowns select");
const addToTeamBtn = document.querySelector(".team-btn");
const teamList = document.getElementById("teamList");

// Cache the object
const cache = {};

// Current pokemon and audio on the page
let currentPokemon = null;
let currentAudio = null;

// Fetch the data
searchBtn.addEventListener("click", async () => {

    const query = searchBox.value.toLowerCase().trim();
    if (!query) return;

    // Check cache first
    if (cache[query]) {
        console.log("Loaded from cache");
        loadPokemon(cache[query]);
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) throw new Error("Pokemon not found");

        const data = await response.json();

        // Store in cache
        cache[query] = data;

        loadPokemon(data);

    } catch (error) {
        alert("Pokemon not found!");
        console.error(error);
    }
});

// Load data onto page
function loadPokemon(data) {

    currentPokemon = data;

    // Image of the pokemon
    resultImage.src = data.sprites.front_default;

    // Audio of the pokemon
    if (data.cries && data.cries.latest) {
        currentAudio = new Audio(data.cries.latest);
    }

    // Load available moves into dropdown menus
    const moves = data.moves;

    dropdowns.forEach(select => {
        select.innerHTML = ""; 

        moves.forEach(moveObj => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });
}

// Play the audio
playBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.volume = volumeSlider.value / 100;
        currentAudio.play();
    }
});

// Add to the team
addToTeamBtn.addEventListener("click", () => {

    if (!currentPokemon) return;

    const selectedMoves = Array.from(dropdowns).map(select => select.value);

    const teamMember = document.createElement("div");
    teamMember.style.border = "1px solid #ccc";
    teamMember.style.padding = "10px";
    teamMember.style.marginTop = "10px";

    teamMember.innerHTML = `
        <h4>${currentPokemon.name}</h4>
        <img src="${currentPokemon.sprites.front_default}" width="80">
        <p>Moves:</p>
        <ul>
            ${selectedMoves.map(move => `<li>${move}</li>`).join("")}
        </ul>
    `;

    teamList.appendChild(teamMember);
});