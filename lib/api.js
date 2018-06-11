function request(url, fctn) {
    if (self.fetch) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                return fctn(result);
            });
    } else {
        console.log("unimplemented for IE Users");
    }
}