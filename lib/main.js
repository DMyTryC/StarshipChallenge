// Used SWAPI-Wrapper as an guide (https://github.com/cfjedimaster/SWAPI-Wrapper)
document.addEventListener("DOMContentLoaded", init, false);

var urlSWAPI = "https://swapi.co/api/";

function getAll(fctn) {
    request(urlSWAPI, fctn);
}

function request(url, fctn) {
    if (self.fetch) {
        fetch(url)
            .then(response => response.json())
            .then(result => fctn(result));
    } else {
        var req = new XMLHttpRequest();
        // ?format=json used since the site provides a response in the form of json
        req.open("GET", url + "?format=json", true);
        req.onload = () => {
            fctn(req.responseText);
        };
        req.send();
    }
}

function getFilm(id, fctn) {
    request(urlSWAPI + 'films/' + id, fctn);
}

function getFilms() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'films/', arguments[0]);
    } else {
        request(urlSWAPI + 'films/?page=' + arguments[0], arguments[1]);
    }
}

function getPerson(id, fctn) {
    request(urlSWAPI + 'people/' + id, fctn);
}

function getPeople() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'people/', arguments[0]);
    } else {
        request(urlSWAPI + 'people/?page=' + arguments[0], arguments[1]);
    }
}

function getPlanet(id, fctn) {
    request(urlSWAPI + 'planets/' + id, fctn);
}

function getPlanets() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'planets/', arguments[0]);
    } else {
        request(urlSWAPI + 'planets/?page=' + arguments[0], arguments[1]);
    }
}

function getSpecies(id, fctn) {
    request(urlSWAPI + 'species/' + id, fctn);
}

function getAllSpecies() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'species/', arguments[0]);
    } else {
        request(urlSWAPI + 'species/?page=' + arguments[0], arguments[1]);
    }
}

function getStarship(id, fctn) {
    request(urlSWAPI + 'starships/' + id, fctn);
}

function getStarships() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'starships/', arguments[0]);
    } else {
        request(urlSWAPI + 'starships/?page=' + arguments[0], arguments[1]);
    }
}

function getVehicle(id, fctn) {
    request(urlSWAPI + 'vehicles/' + id, fctn);
}

function getVehicles() {
    //Support no page
    if (arguments.length === 1) {
        request(urlSWAPI + 'vehicles/', arguments[0]);
    } else {
        request(urlSWAPI + 'vehicles/?page=' + arguments[0], arguments[1]);
    }
}

function init() {
    console.log("Start init");

    console.log("End init");
}
