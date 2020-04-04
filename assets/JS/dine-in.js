$(document).ready(function() {
  console.log("ready!");


  // Query the API
  function buildQueryURL() {

  // QueryURL to Spoonacular App 
  var queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
  recipeInput + 
  "&apiKey=32de3e49a74748bd9db408e1bee255d2";

  // Grabs the input from the ingredint input text
  var recipeInput = $("#icon_prefix2").val();
    console.log(recipeInput, "recipeInput");
  
  }

  // Function that accounts for how many recipes they want (input or dropdown)
  function updatedRecipes(recipeData) {
   // Get from the form the number of results to display    
          
    var numRecipes = $("#ingredient-count").val();
    console.log(recipeData); 

    // Loop through and build elements for the defined number of recipes
    for (var i = 0; i < numRecipes; i++) {
    // Get specific article info for current index
    var recipe = recipeData.response.docs[i];

    // Increase the recipeCount (track recipe # - starting at 1)
    var recipeCount = i + 1;

     // Create the list group to contain the recipes and add the recipe content for each
     var recipeList = $("<ul>");
     recipeList.addClass("list-group");

    }

      // Prepending the image to the page  // Add the newly created element to the DOM
    $("#recipe-view").append(recipeList);

    // If the article has a headline, log and append to articleList
    var title = recipe.title;
    var recipeListItem = $("<li class='list-group-item recipeTitle'>");

    if (title && title.main) {
      console.log(title.main);
      recipeListItem.append(
        "<span class='label label-primary'>" +
          recipeCount +
          "</span>" +
          "<strong> " +
          title.main +
          "</strong>"
      );
    }
  }


// CLICK HANDLER
// ==========================================================

  // On-click when user enters in the ingredients they have on hand 
  $("#ingredient-input").on("click", function(event) {
    event.preventDefault();

  // Build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

    //AJAX call 
    $.ajax({
      url: queryURL,
      method: "GET"
      }).then(updatedRecipes) 
      console.log(updatedRecipes[0].title); 
  });     

}); 



  



