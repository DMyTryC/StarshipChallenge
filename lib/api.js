// Used SWAPI-Wrapper as an guide (https://github.com/cfjedimaster/SWAPI-Wrapper)

var urlSWAPI = "https://swapi.co/api/starships/";

function request(fctn) {
    if (self.fetch) {
        fetch(urlSWAPI)
            .then(response => {
                return response.json();
            })
            .then(result => {
                return fctn(result);
            })
            .catch(error => {
                return fctn("undefined");
            });
    } else {
        var req = new XMLHttpRequest();
        // ?format=json used since the site provides a response in the form of json
        req.open("GET", url + "?format=json", true);
        req.onload = () => {
            if (req.responseText === ""){
                fctn("undefined");
            } else {
                fctn(req.responseText);
            }
        };
        req.send();
    }
}