// Initalizing JS
$(document).ready(function() {
  console.log("ready!");

  // Global variables
  var recipeInput="";
  var queryURL="";
  var numRecipes="";

  //Initializez drop down function 
  $('.dropdown-trigger').dropdown();  

  // On-click when user enters recipes they want 
  $(".recipeOption").on("click", function() {

    //Get from the form the number of results to display
    numRecipes=parseInt(this.id);
    console.log(numRecipes);
    console.log(this,"this");
  }); // End of number of recipes on click

  // On-click when user enters in the ingredients they have on hand 
  $("#ingredient-input").on("click", function(event) {
  event.preventDefault();
  console.log("you've clicked a button");

    // Grabs the input from the ingredint input text (get)
    recipeInput = $("#icon_prefix2").val();
    console.log(recipeInput, "recipeInput")

    storeIngredients();
  }); // End of Ingredient-input on click

// Function to retrieve Recipe Link 
function recipeLink (recipeid) {
    
      // QueryURL to Spoonacular App 
    var recipeURL =  "https://api.spoonacular.com/recipes/" +
    recipeid + "/information?includeNutrition=false" +
    "&apiKey=93a2b71e7d544117b9e164237b7979e0"

    console.log("recipeURL", recipeURL);
    
    return(
      $.ajax({
        url: recipeURL,
        method: "GET"
        }).then(function(response) {
         console.log(response); 
         console.log(response.sourceUrl)
         return response.sourceUrl;
      }) // End of ajax then response
    ) // End of Return 
  } // End of store ingredients function


  // Funtion to get recipe link and to append all details to the site 
function storeIngredients() {

    // QueryURL to Spoonacular App
    queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    recipeInput +
    "&apiKey=93a2b71e7d544117b9e164237b7979e0"

    $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {

        // Establish a variable ot retreive the recipe link based on the previously grabbed ID 
        response.forEach(async (res, index) => {
          if (index < numRecipes) {
          var link = await recipeLink(res.id);
          console.log(link, "link");
          if (link) {

            // Append details to the site 
            $("#recipe-view").append(
              "<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>"
              //card Title
              + res.title
              //card body elements
              + "<img src=" + res.image + ">"
              //card link
              + "<p>Link to Recipe: " + link + "</p>"
              ) // End of append 
          } // End of If Statement 
          } // End of If Statement 
        }) // End of response
   }) // End of ajax then response
 } // End of store ingredients function
}); // Final closing tag    

  



