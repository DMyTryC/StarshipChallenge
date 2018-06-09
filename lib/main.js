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
        req.open("GET", url+"?format=json", true);
        req.onload = () =>{
            fctn(req.responseText);
        };
        req.send();
    }
}

/*//generic for ALL calls, todo, why optimize now!
function getResource(u, cb) {

}

function getFilm(id, cb) {
  request(rootURL + 'films/'+id, cb);
}

function getFilms() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'films/', arguments[0]);
  } else {
	request(rootURL + 'films/?page='+arguments[0], arguments[1]);
  }
}

function getPerson(id, cb) {
  request(rootURL + 'people/'+id, cb);
}

function getPeople() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'people/', arguments[0]);
  } else {
	request(rootURL + 'people/?page='+arguments[0], arguments[1]);
  }
}

function getPlanet(id, cb) {
  request(rootURL + 'planets/'+id, cb);
}

function getPlanets() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'planets/', arguments[0]);
  } else {
	request(rootURL + 'planets/?page='+arguments[0], arguments[1]);
  }
}

function getSpecies(id, cb) {
  request(rootURL + 'species/'+id, cb);
}

function getAllSpecies() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'species/', arguments[0]);
  } else {
	request(rootURL + 'species/?page='+arguments[0], arguments[1]);
  }
}

function getStarship(id, cb) {
  request(rootURL + 'starships/'+id, cb);
}

function getStarships() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'starships/', arguments[0]);
  } else {
	request(rootURL + 'starships/?page='+arguments[0], arguments[1]);
  }
}

function getVehicle(id, cb) {
  request(rootURL + 'vehicles/'+id, cb);
}

function getVehicles() {
  //Support no page
  if(arguments.length === 1) {
	request(rootURL + 'vehicles/', arguments[0]);
  } else {
	request(rootURL + 'vehicles/?page='+arguments[0], arguments[1]);
  }
*/

function init() {
    console.log("go");

    getAll((result) => {
        console.log(result);
    });
}
