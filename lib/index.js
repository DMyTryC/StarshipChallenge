document.addEventListener("DOMContentLoaded", init, false);

function init() {
    console.log("Start");

    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
        var searchBar = document.getElementById("searchBar");
        getStarships(function (allShips) {
            var resultArea = document.getElementById("resultArea");
            // Find the ship needed
            //resultArea.value = JSON.stringify(searchResult["results"], undefined, 4);
        });
    });
}