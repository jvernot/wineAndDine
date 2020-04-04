$(document).ready(function() {
    console.log("ready!");


// Query the API
function buildQueryURL() {

    // QueryURL to Spoonacular App https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
    var queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    recipeInput + 
    "&apiKey=32de3e49a74748bd9db408e1bee255d2";

    // Grabs the input from the ingredint input text
    var recipeInput = $("#icon_prefix2").val();
        console.log(recipeInput, "recipeInput")

  }

    // Function that accounts for how many recipes they want from the drop down and grabs data
    function updateRecipes(recipeData) {   

        console.log("------");
        console.log(updateRecipes[0].title);
     
          
        // Looks to see how many recipes the user wanted to see 
        $('.dropdown1').dropdown();
        //var numRecipes = $("#dropdown1").val(); //took out numRecipes
        console.log(numRecipes, "numRecipes"); 

        // Loop through and build elements for the defined number of recipes
        for (var i = 0; i < numRecipes; i++) {

        // Get specific recipe title info for current index
        var recipe = (recipeData[0].title);
        console.log(recipeData, "recipeData")

        // Increase the recipeCount (track recipe # - starting at 1)
        var recipeCount = i + 1;

        // Create the list group to contain the recipes and add the recipe content for each
        var recipeList = $("<ul>");
        recipeList.addClass("list-group");
        }

      // Prepend the title, URL and image 
     $("#recipe-view").append(recipeList);

        // If the article has a an image log and append to articleList
        var title = recipe[0].title;
        var recipeListItem = $("<li class='list-group-item recipeTitle'>");

        var image = (recipe[0].image);
        var sourceURL = (recipe[0].id) // get recipe list from id 

        if (title) { 
        recipeListItem.append(
            "<span class='label label-primary'>" +
            recipeCount +
            "</span>" +
            image +
            "</img>"
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
      }).then(updateRecipes) 
      
      console.log(updateRecipes[0].title);
  });     

}); 

// // Prepending the image to the page 
//$("#recipe-view").append(response[0].title);

//https://spoonacular.com/food-api/docs#Get-Recipe-Information

  



