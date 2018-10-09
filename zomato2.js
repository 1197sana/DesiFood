var restaurants;


function makeHTML(restaurantArray){
    console.log("Making HTML");

    for (var i=0; i<restaurantArray.length; i++){
        var htmlString = "<p>" + restaurantArray[i].restaurant.name + "</p>";
        $(".a").append(htmlString);
    }
}

// restaurants = result.restaurants[1].restaurant.name; 
// makeHTML (restaurants);



//above this is stuff i put to make it show up on my page not console

function makeZomatoRequest(){

	var zomatoURL = "https://developers.zomato.com/api/v2.1/search?entity_id=57&entity_type=city&cuisines=148";

    console.log("About to make the Ajax request to Zomato");
    $.ajax({
        url: zomatoURL,
        type: "GET",
        headers: {
            'user-key':'128179da0e7972547e1938fdae65a31d'
        },
        dataType: "json",
        error: function(err){
            console.log(err);
        },
        success: function(result){
            console.log("Success!");
            console.log(result);


            var theRestaurants = result.restaurants; //the array of restaurant objects. 

            //the lines below should also make it show up 

            makeHTML(theRestaurants);

            // for (var i=0; i<theRestaurants.length; i++){
            //     // $('#.a').append(htmlString);
            //     console.log(theRestaurants[i].restaurant.name);
            // }
        }
    });
}

//is the document loaded and ready?
$(document).ready(function(){
    //the document is ready. setup event listeners

    //listen for a click on the search button
    $("#search2").click(function(){
        console.log("Search was clicked!");
        makeZomatoRequest();
    });

});





