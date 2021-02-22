const searchInput = document.getElementById("search-input")
const recipesContainer = document.getElementById("recipes-container")
const API_URL = "https://api.edamam.com/search?q=drinks&app_id=2c7ab300&app_key=a73eb2f5f9b34e3b3c987e740ccdefb4&from=0&to=20&calories=391-522"

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
            <a href="${element.recipe.url}">View recipe</a>
            <p>Ingredients: ${element.recipe.ingredientLines}</p>
          </div>
        ` 
        });
        
        
        //event listener on click
    })