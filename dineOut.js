$(document).ready(function() {
    console.log("test");

    
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

            })


        }


    })



    



















});