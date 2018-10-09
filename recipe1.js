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

    }

});
}

$("#search").click(function(){
	console.log("Search was clicked!");
	var userInput = $("#recipe").val(); //select input box and grab value and save to variable
	makeRecipeSearch(userInput);
});


