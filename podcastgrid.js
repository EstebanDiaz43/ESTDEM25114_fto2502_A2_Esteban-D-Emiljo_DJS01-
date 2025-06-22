import { podcasts, genres } from "./data.js";

/**
 * Helper to map genre IDs to genre titles using genres from data.js
 * @param {number[]} genreIds - Array of genre IDs from a podcast object.
 * @returns {string} - Comma-separated genre titles.
 */
function getGenreTitles(genreIds) {
  if (!Array.isArray(genreIds)) return "";
  return genreIds
    .map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.title : "Unknown";
    })
    .join(", ");
}

/**
 * Renders a grid of podcast cards.
 * @param {Array} podcasts - Array of podcast objects from data.js.
 * @param {HTMLElement} container - The DOM element to render the grid into.
 */
function renderPodcastsGrid(podcasts, container) {
  container.innerHTML = ""; // Clear previous content

  const grid = document.createElement("div");
  grid.className = "podcasts-grid";

  podcasts.forEach((podcast) => {
    const card = document.createElement("div");
    card.className = "podcast-card";

    const genresText = getGenreTitles(podcast.genres);

    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}" class="podcast-image" />
      <h3>${podcast.title}</h3>
      <p><light>${podcast.seasons}  seasons</light></p>
      <p class="GenreText"> ${genresText}</p>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// Render the grid after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("podcast-list-grid");
  renderPodcastsGrid(podcasts, container);
});
