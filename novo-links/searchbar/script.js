function searchGoogle() {
  var searchTerm = document.getElementById("search-input").value;
  if (searchTerm.trim() !== "") {
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    window.open(searchUrl, "_blank");
  }
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchGoogle();
  }
});