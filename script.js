const searchInput = document.getElementById("search-input")
const recipesContainer = document.getElementById("recipes-container")
let userInput = ""
const searchButton = document.getElementById("search-button")
const searchForm = document.getElementById("search-form")
const filterCalories = document.getElementById("filter-calories")
let selectInput = ""

const startingPage = () => { 
  const startURL = `https://api.edamam.com/search?q=cake&app_id=02a54850&app_key=4363b395b71fa21033612dab692612e1&from=0&to=20&calories=391-522`
fetch(startURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        //html structure
        const dataArray = data.hits
        dataArray.forEach(element => {
          recipesContainer.innerHTML += `
          <div id="recipe-card" class="recipeCard">
            <img src="${element.recipe.image}"/>
            <h1>${element.recipe.label}</h1>
            <p>Author: ${element.recipe.source}</p>
            <a href="${element.recipe.url}">View recipe</a>
            <p>Ingredients: ${element.recipe.ingredientLines}</p>
            <p>Cooking time: ${element.recipe.totalTime} minutes</p>
          </div>
        ` 
        });
        
    })
  }
startingPage()

const fetchData = () => { 
  const API_URL = `https://api.edamam.com/search?q=${userInput}&app_id=49d10ab5&app_key=b0c519fd0747b629373b6758af019025&from=0&to=20&calories=${selectInput}`
  console.log(selectInput)
  recipesContainer.innerHTML = ""
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
            <h1>${element.recipe.label}</h1>
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

    filterCalories.addEventListener("change", (event) => {
      selectInput = event.target.value;
      console.log(selectInput)
    })