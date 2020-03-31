
$(document).ready(function() {
  console.log("ready!");
  
  //On-click when user enters in the ingredients they have on hand 
  $("#ingredient-input").on("click", function(event) {
      event.preventDefault();

          var ingredients = $(this).attr("#ingredient-input");
   
          // QueryURL to Spoonacular App 
          var queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
          "chicken" + 
          "&apiKey=32de3e49a74748bd9db408e1bee255d2";
          
          //AJAX call 
          $.ajax({
              url: queryUrl,
              method: "GET",
          }).then(function(response) {
              console.log(response);
              console.log(queryURL);

              var recipeArray = response.recipes;
              console.log(recipeArray);

              var recipes ="";

              // Function that accounts for how many recipes they want (input or dropdown?)



              // loop through recipes 
              for (var i = 0; i <9; i++) {
              recipes = recipes + random;
              }
              
              //append list of recipes to the web page 
              $("#recipe-view").append("<br>" + recipes);
          })
      })
});
