$(document).ready(function() {
    console.log("ready!");
  
  // On-click when user enters in the ingredients they have on hand 
    $("#ingredient-input").on("click", function(event) {
      event.preventDefault();
  
      // Grabs the input from the ingredint input text
      var recipeInput = $("#icon_prefix2").val();
      console.log(recipeInput, "recipeInput");
  
      // QueryURL to Spoonacular App 
      var queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
      recipeInput + 
      "&apiKey=32de3e49a74748bd9db408e1bee255d2"
  
      //AJAX call 
      $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
          console.log(response[0].title);
          console.log(response[0].image);
          console.log(response[0].usedIngredients);
  
            
  
        // Function that accounts for how many recipes they want (input or dropdown)
        $("#ingredient-amount").on("click", function(event) {
          event.preventDefault();
  
          //defining how many articles they want 
          var amountInput = $("#icon_prefix2").val();
          console.log(amountInput, "amountInput");
        }) // ingredient amount end response 
  
          // Loop through and build elements for the defined number of recipes
          //for (var i = 0; i < numRecipes; i++) {
          // Get specific article info for current index
           // var article = response[i];
  
          // Increase the articleCount (track article # - starting at 1)
          //var recipeCount = i + 1;
  
        // Prepending the image to the page 
        $("#recipe-view").append(response[0].title);
         
      }) // End of then response
    }) //  End of Ingredient-input on click
  }); // Final closing tag

