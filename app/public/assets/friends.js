$(document).ready(function(){
	console.log("friends.js is linked and ready!");


let bestDiff;
let bestFriend;
let currentDiff;

	$.ajax({
		url: "/api/friends",
		method: "GET"
	}).done(function(res){
		console.log(res); //logging it to parse through it

		//delete old data from the table to avoid duplicates.
		$('#match-name').html('');
		$('#match-location').html('');
		$('#match-hobbies').html('');

		//placeholder value to hold our upcoming friend info.
		var dataToInsert = "";
		//identify user entry from post method in routes


		let user = res.length - 1;
		

		//find the initial comparison difference
		firstFriend(res[0], res[user]);
		// console.log("initial best diff " + bestDiff + " first friend is " + bestFriend);

		//loop through friends in database
		for(var i = 1; i < (res.length-1); i++){
		
			
			// call evalFriend() to the friend in the database at [i]
			evalFriend(res[i], res[user]);
			//console.log(res[i].name);
			// if the current total diff < best total diff, reset the best and the best friend index with current
			if( currentDiff < bestDiff){
				bestFriend = res[i];
				console.log("NEW BFF is" + bestFriend);
				bestDiff = currentDiff;
			}
			else{
				console.log(currentDiff + "CD");
				console.log(bestDiff + "BD");
			}

			//console.log("Best friend is" + res[i].name);
		} //end of first friend loop
		//console.log("the best diff is " + bestDiff + " and the best friend is " + bestFriend);
		sendData();
	}); //end .done

	function firstFriend(init, surveyUser){
		console.log(init);
		console.log(surveyUser);
		evalFriend(init, surveyUser);
		bestDiff = currentDiff;
		bestFriend = init;
	}; //end firstFriend


	function evalFriend(data, user){
	//evaluate the user against a person in database by looping through user and res[i] answers,
		//find the absolute difference between the answers at [i] 
		var Q1 = Math.abs(user.Q1 - data.Q1);
		var Q2 = Math.abs(user.Q2 - data.Q2);
		var Q3 = Math.abs(user.Q3 - data.Q3);
		var Q4 = Math.abs(user.Q4 - data.Q4);
		var Q5 = Math.abs(user.Q5 - data.Q5);
		var Q6 = Math.abs(user.Q6 - data.Q6);
		var Q7 = Math.abs(user.Q7 - data.Q7);
		var Q8 = Math.abs(user.Q8 - data.Q8);
		var Q9 = Math.abs(user.Q9 - data.Q9);
		var Q10 = Math.abs(user.Q10 - data.Q10);


		currentDiff = Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7 + Q8 + Q9 + Q10;
		//add each absolute difference to the current total diff

	}; //end of evalFriend 

	function sendData(){
		$('#match-image').attr('src', bestFriend.photo);
		$('#match-name').html(bestFriend.name);
		$('#match-location').html(bestFriend.city);
		$('#match-hobbies').html(bestFriend.hobbies);

		console.log(bestFriend.name);
	}

}); //end of document ready



