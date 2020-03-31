$(document).ready(function() {
    console.log("test");
    
    $('.dropdown-trigger').dropdown();
   
    
    $("#cuisineList").on("click", function() {
        event.preventDefault();

        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(position) {
        
            var lattitude = position.coords.latitude;

            console.log("Lattitude: " + lattitude);

            var longitude = position.coords.longitude;

            console.log("Longitude: " + longitude);

            var queryUrl = "https://developers.zomato.com/api/v2.1/cuisines?lat=" + lattitude + "&lon=" + longitude;
            
            $.ajax({
                url: queryUrl,
                type: "GET",
                beforeSend: function(xhr){xhr.setRequestHeader('user-key', 'c9dfe68dd53ff029491860327766f2ef');}
            })
        
            .then(function(response) {
                console.log(response)

                var cuisineArray = response.cuisines;

                console.log(cuisineArray);

                
                for (var i = 0; i < cuisineArray.length; i++) {
                    
                    // $("#dropdown1").append("<li><a data-ID=" + cuisineArray[i].cuisine.cuisine_id + "href=#!>" + cuisineArray[i].cuisine.cuisine_name + "</a></li>");
                    $("#dropdown1").append(`<li><a data-id=${cuisineArray[i].cuisine.cuisine_id} href=#!> ${cuisineArray[i].cuisine.cuisine_name} </a></li>`)
                    $("#dropdown1").append("<li class='divider' tabindex='-1'></li>");
                    
                };
            
            })
            
        }

    })

    $("#dropdown1").on("click", function(event) {
        console.log("click");

        console.log($(event.target));

        var cuisineId = $(event.target).attr("data-id");

        console.log(cuisineId);

    })

    



















});