const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const characterName = searchInput.value;

  const apiUrl = `https://secure.unescape.com/m=hiscore_oldschool/hiscorepersonal`;

  resultsDiv.innerHTML = `<p>Loading...</p>`;

    //Notes
    //POST payload: user1=riko+swave&submit=Search

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        resultsDiv.innerHTML = `<p>Character not found.</p>`;
      } 
      else 
      {
        const stats = data.stats;
        resultsDiv.innerHTML = `
          <h2>${characterName}</h2>
          Put some interesting stats here`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultsDiv.innerHTML = `<p>An error occurred.</p>`;
    });
});
