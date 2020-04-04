$(document).ready(function() {
  console.log("ready!");

  var recipeInput="";
  var queryURL="";

  //Initializing drop down function 
  $('.dropdown-trigger').dropdown();
 
  // On-click when user enters in the ingredients they have on hand 
  $("#ingredient-input").on("click", function(event) {
  event.preventDefault();
  console.log("you've clicked a button");

  // Grabs the input from the ingredint input text (get)
  recipeInput = $("#icon_prefix2").val();
  console.log(recipeInput, "recipeInput")
  storeIngredients()
  
  }) //  End of Ingredient-input on click

 // Function to give for local storage
 function storeIngredients() {
  
  // QueryURL to Spoonacular App 
  queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
  recipeInput + 
  "&apiKey=32de3e49a74748bd9db408e1bee255d2"
  console.log("inside on click function query URL", queryURL);
  console.log("inside store ingredients");

  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response[0].title);
        console.log(queryURL);

      // Prepending the image to the page  
   
       $("#recipe-view").append(
       
       //card title
       "<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>"
       + response[0].title);


    }) // End of then response
  }

}); // Final closing tag    

  



