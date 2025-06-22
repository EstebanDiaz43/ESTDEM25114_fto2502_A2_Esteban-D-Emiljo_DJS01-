import { podcasts } from "./data.js";

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

    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}" class="podcast-image" />
      <h3>${podcast.title}</h3>
      <p><strong>Seasons:</strong> ${podcast.seasons}</p>
      
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
