//comments to see change happen
var restaurants;


function makeHTML(restaurantArray){
    console.log("Making HTML");
    console.log(restaurantArray);

    for (var i=0; i<restaurantArray.length; i++){
        // console.log(i);
        var htmlString = "<p> <a href=' "+restaurantArray[i].restaurant.events_url+" ' >" + restaurantArray[i].restaurant.name + "</a></p>";
        $(".a").append(htmlString);
    }
}

function makeHTML2(recipesData){
    console.log("Making HTML2");

        for (var i=0; i<recipesData.hits.length; i++){ 
        var htmlString = "<p> <a href=' "+recipesData.hits[i].recipe.url+" ' >" + recipesData.hits[i].recipe.label + "</a></p>";
        $(".a").append(htmlString);    


        }
    }

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

});

function makeRecipeSearch(food){

    console.log(food);

    var recipeSearchURL = "https://api.edamam.com/search?q=" + food + " &app_id=4848e14b&app_key=a169860faaa997eb074220b3596a1fbb";

$.ajax({
    url: recipeSearchURL,
    type: 'GET',
    headers: {
            'api-key':'bfdifbhiegltjwtdwiyekwrnatmevab',
            'Content-Type':'application/json'
        },
    dataType: 'json',
    error: function(err){
    console.log(err);
    },

    success: function(data){
        console.log("WOHOO!");
        console.log(data);

        var recipesData = data;
        for (i = 0; i < recipesData.hits.length; i++) {      
            console.log(data.hits[i].recipe.label);
            console.log(data.hits[i].recipe.url);
            makeHTML2(recipesData);


        }



    }

    });

}

 //listen for a click on the search button
    $("#search2").click(function(){
        console.log("Search was clicked!");
        $(".a").html("");
        makeZomatoRequest();
    });

    $("#search").click(function(){
        console.log("Search was clicked!");
        var userInput = $("#recipe").val(); //select input box and grab value and save to variable
        makeRecipeSearch(userInput);
    });





