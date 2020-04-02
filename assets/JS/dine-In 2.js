$(document).ready(function() {
  console.log("ready!");


  // On-click when user enters in the ingredients they have on hand 
  $("#ingredient-input").on("click", function(event) {
  event.preventDefault();









  

  // QueryURL to Spoonacular App 
  var queryURL =  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
  "chicken" + 
  "&apiKey=32de3e49a74748bd9db408e1bee255d2"
  console.log(queryURL);
  
  //AJAX call 
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
      console.log(response[0].title);
      console.log(response[0].image);
      console.log(response[0].usedIngredients);


      // Function that accounts for how many recipes they want (input or dropdown)
      


      // Prepending the image to the page 
      $("#recipe-view").prepend(response[0].title);
       
    }) // End of then response
  }) //  End of Ingredient-input on click
}); // Final closing tag


