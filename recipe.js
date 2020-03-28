// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
});

$("#find-recipe").on("click", function(event) {
  event.preventDefault();
  var ingredients = $(this).attr("#ingredient-input");

var queryURL =
  'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
  'tomato,cilantro' + 
  '&apiKey=32de3e49a74748bd9db408e1bee255d2';
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
});
