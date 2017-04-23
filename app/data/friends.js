$(document).ready(function(){
	console.log("friends.js is linked and ready!");
	$.ajax({
		url: "/api/friends",
		method: GET
	}).done(function(res){
		console.log(res); //logging it to parse through it

		//delete old data from the table to avoid a long list of duplicates on your webpage.

		//placeholder value to hold our upcoming friend info.

		//identify user entry from post method in routes

		//loop through friends in database
		for(var i = 0; i < res.length; i++){
			//set var to hold best total diff in answers and best friend index
			let bestDiff = 40; //worst possible match
			let bestFriend;
			
			// set var = 0 for current total diff
			// call evalFriend() to the friend in the database at [i]
			// if the current total diff < best total diff, reset the best and the best friend index with current
		} //end of first friend loop


	}); //end .done


}); //end of document ready



//function evalFriend
//evaluate the user against a person in database by looping through user and res[i] answers,
	//find the absolute difference between the answers at [i] 
	//add each absolute difference to the current total diff