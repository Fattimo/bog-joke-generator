document.addEventListener('click', e => {
    //console.log(e.target);
    let id = e.target.id
    if(id === "joke-button") {
        //console.log("clicked")
        let joke = getJoke();
        //console.log(joke)
        joke.then(function(result) {
            document.getElementById("joke").innerHTML = result
        })
    } else if (id === "hip") {
        //console.log("hip")
        let jokes = searchJoke("hipster")
        jokes.then(function(result) {
            //console.log(result)
            let joke = result[Math.floor(Math.random() * result.length)]
            document.getElementById("joke").innerHTML = joke.joke
        })
    } else if (id === "his") {
        //console.log("his")
        let jokes = searchJoke("history")
        jokes.then(function(result) {
            //console.log(result)
            let joke = result[Math.floor(Math.random() * result.length)]
            document.getElementById("joke").innerHTML = joke.joke
        })
    } else if (id === "bee") {
        //console.log("bee")
        let jokes = searchJoke("bee")
        jokes.then(function(result) {
            //console.log(result)
            let joke = result[Math.floor(Math.random() * result.length)]
            document.getElementById("joke").innerHTML = joke.joke
        })
    }
});

const options = {
    method: 'GET',
    headers:{
        "Accept" : "application/json"
    }
};
async function getJoke() {
    try {
        const response = await fetch("http://icanhazdadjoke.com", options)
        const responseAsJson = await response.json()
        //console.log(responseAsJson.joke)
        return responseAsJson.joke;
    } catch (error) {
        console.error(error)
    }
}

async function searchJoke(term) {
    try {
        const response = await fetch(getUrl(term), options)
        const responseAsJson = await response.json()
        console.log(responseAsJson)
        return responseAsJson.results
    } catch (error) {
        console.error(error)
    }
}

const getUrl = function(term) {
    return "http://icanhazdadjoke.com/search?term=" + term
}