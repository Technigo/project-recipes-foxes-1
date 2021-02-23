const searchInput = document.getElementById("search-input")
const recipesContainer = document.getElementById("recipes-container")
let userInput = ""
const searchButton = document.getElementById("search-button")
const searchForm = document.getElementById("search-form")

const fetchData = () => { 
const API_URL = `https://api.edamam.com/search?q=${userInput}&app_id=02a54850&app_key=4363b395b71fa21033612dab692612e1&from=0&to=20&calories=391-522`
fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        //html structure
        const dataArray = data.hits
        dataArray.forEach(element => {
          recipesContainer.innerHTML += `
          <div id="recipe-card" class="recipeCard">
            <img src="${element.recipe.image}"/>
            <p>${element.recipe.label}</p>
            <p>Author: ${element.recipe.source}</p>
            <a href="${element.recipe.url}">View recipe</a>
            <p>Ingredients: ${element.recipe.ingredientLines}</p>
            <p>Cooking time: ${element.recipe.totalTime} minutes</p>
          </div>
        ` 
        });
        
    })
  }

    //event listener on click
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      userInput = searchInput.value;
      console.log(userInput)

      fetchData()
    })
