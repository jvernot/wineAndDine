$( document ).ready(function() {
  console.log("ready!");

  // Event listener for all button elements
  $("#ingredient-input").on("click", function(event) {
    event.preventDefault();

    var ingredients = $(this).attr("#ingredient-input");
  
    var queryURL =
      'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
    "chicken" + 
      '&apiKey=32de3e49a74748bd9db408e1bee255d2';
    
    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After data comes back from the request
  .then(function(response) {
  console.log(queryURL);
  console.log(response);

  $("#recipe-view").text(JSON.stringify(response));

  function getsource(id) {
    success:function(res){
      document.getElementById("recipeImage").innerHTML=res.sourceUrl
      document.getElementById("sourcelink").href=res.source.Url
    }
    
  });