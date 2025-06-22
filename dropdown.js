// Example genres
const genres = [
  "All Genres",
  "Personal Growth",
  "Investigative Journalism",
  "History",
  "Comedy",
  "Entertainment",
  "Fiction",
  "News",
  "Kids and Family",
];

// Call the dropdown creation function after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  createGenreDropdown(
    genres,
    document.getElementById("genredropdownContainer"),
    (selectedGenre) => {
      console.log("Selected genre:", selectedGenre);
      // Add filter logic here
    }
  );
});

/**
 * Creates a genre filter dropdown and attaches it to the specified container.
 * @param {string[]} genres - Array of genre strings.
 * @param {HTMLElement} container - The DOM element to attach the dropdown to.
 * @param {function} onGenreChange - Callback function when genre changes.
 */
function createGenreDropdown(genres, container, onGenreChange) {
  // Create select element
  const select = document.createElement("select");
  select.id = "genreDropdown";

  // Add genre options
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    select.appendChild(option);
  });

  // Handle change event
  select.addEventListener("change", (event) => {
    onGenreChange(event.target.value);
  });

  // Attach to container
  container.appendChild(select);
}

// Example last updated options
const UpdatedOptions = ["Recently Updated", "Most Popular", "Newest"];
// Call the last updated dropdown creation function after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  createLastUpdatedDropdown(
    UpdatedOptions,
    document.getElementById("updateddropdownContainer"),
    (selectedOption) => {
      console.log("Selected last updated option:", selectedOption);
      // Add filter logic here
    }
  );
});

/**
 * Creates a last updated filter dropdown and attaches it to the specified container.
 * @param {string[]} options - Array of last updated options.
 * @param {HTMLElement} container - The DOM element to attach the dropdown to.
 * @param {function} onOptionChange - Callback function when option changes.
 */
function createLastUpdatedDropdown(options, container, onOptionChange) {
  // Create select element
  const select = document.createElement("select");
  select.id = "lastUpdatedDropdown";

  // Add option elements
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });

  // Handle change event
  select.addEventListener("change", (event) => {
    onOptionChange(event.target.value);
  });

  // Attach to container
  container.appendChild(select);
}
