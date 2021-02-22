
API_URL = "https://api.edamam.com/search?q=drinks&app_id=2c7ab300&app_key=a73eb2f5f9b34e3b3c987e740ccdefb4&from=0&to=20&calories=391-522"

fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })