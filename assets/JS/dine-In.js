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
  $("#dropdown4").on("click", function() {

    //Get from the form the number of results to display
    numRecipes = $(event.target).toString();
    console.log(numRecipes);
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

 // Function to give for local storage
 function storeIngredients() {
  
  // QueryURL to Spoonacular App 
  queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
  recipeInput + 
  "&apiKey=32de3e49a74748bd9db408e1bee255d2"
  console.log("inside on click function query URL", queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      console.log(response);

       for (var i = 0; i < numRecipes.length; i++) {

        // Add elements to the page 
        $("#recipe-view").append(

          //card title
          "<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>"
          //card body element

          + "<img src=" + response[i].image + ">"
          + "<br>"
          + response[i].title 
        
        ) // End of appending

      }; // end of for loop

    }) // End of ajax then response

  } // End of store ingredients function

}); // Final closing tag    

  



