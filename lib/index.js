document.addEventListener("DOMContentLoaded", init, false);

function init() {
    console.log("Start");

    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
        var searchBar = document.getElementById("searchBar");
        request("https://swapi.co/api/starships/", function (allShips) {
            var resultArea = document.getElementById("resultArea");
            var resultString = "";
            var noShips = 0;
            for (var key in allShips["results"]) {
                if (allShips["results"].hasOwnProperty(key)) {
                    noShips++;
                }
            }
            var allShipsInfo = "[ ";
            for (var i = 0; i < noShips; i++) {
                allShipsInfo += '{"name": "' + allShips["results"][i]["name"] + '", "model": "' + allShips["results"][i]["model"] + '"}';
                if (i < noShips - 1) {
                    allShipsInfo += ', ';
                }
                if ((searchBar.value == allShips["results"][i]["name"]) || (searchBar.value == allShips["results"][i]["model"])) {
                    resultString = '{"name": "' + allShips["results"][i]["name"] + '", "model": "' + allShips["results"][i]["model"] + '", "pilots": [ ';
                    var urls = allShips["results"][i]["pilots"];
                    var promises = urls.map(url => fetch(url).then(promise => promise.json()));
                    Promise.all(promises).then(pilots => {
                        for (var j = 0; j < pilots.length; j++) {
                            resultString += '{"name": "' + pilots[j]["name"] + '"}';
                            if (j < pilots.length - 1) {
                                resultString += ', ';
                            }
                        }

                        resultString += "]}";

                        resultArea.value = JSON.stringify(JSON.parse(resultString), undefined, 4);
                    });
                }
            }
            allShipsInfo += " ]";

            // didn't find the starship
            if (resultString == "") {

                var resultJSON = JSON.stringify(JSON.parse(allShipsInfo), undefined, 4);
                resultArea.value = "Starship doesn't exist. Those that exist : \n" + resultJSON;
            }
        });
    });
}