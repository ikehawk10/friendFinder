$(document).ready(function(){
	console.log("friends.js is linked and ready!");

// const htmlRoutes = require('htmlRoutes.js'); //to get the name and phone of current user
// const path = require('path');
// const mysql = require('mysql');

var Lisa= { name: 'Lisa',
  photo: 'www.pinterest.com',
  Q1: 2,
  Q2: 2,
  Q3: 2,
  Q4: 2,
  Q5: 2,
  Q6: 2,
  Q7: 2,
  Q8: 2,
  Q9: 2,
  Q10: 2};




	// connection.query("SELECT id FROM friends WHERE name=" + name + "AND photo=" + photo, function(err, data){
	// 	if(err) throw err;
	// 	res.send(data);
	// 	console.log(data);
	// });

	$.ajax({
		url: "/api/friends",
		method: GET
	}).done(function(res){
		console.log(res); //logging it to parse through it

		//delete old data from the table to avoid duplicates.
		$('#dataTable').html('');

		//placeholder value to hold our upcoming friend info.
		var dataToInsert = "";
		//identify user entry from post method in routes

		//loop through friends in database
		for(var i = 0; i < res.length; i++){
			//set var to hold best total diff in answers and best friend index
			let bestDiff = 40; //worst possible match
			let bestFriend = res[1];
			
			// set var = 0 for current total diff
			let currentDiff =0;
			
			// call evalFriend() to the friend in the database at [i]
			evalFriend(res[i]);
			// if the current total diff < best total diff, reset the best and the best friend index with current
			if( currentDiff < bestDiff){
				bestFriend = res[i];
			}

			console.log("Best friend is" + res[i].name);
		} //end of first friend loop


	}); //end .done

	function evalFriend(data){
	//evaluate the user against a person in database by looping through user and res[i] answers,
		//find the absolute difference between the answers at [i] 
		var Q1 = Math.abs(lisa.Q1 - data.Q1);
		var Q2 = Math.abs(lisa.Q2 - data.Q2);
		var Q3 = Math.abs(lisa.Q3 - data.Q3);
		var Q4 = Math.abs(lisa.Q4 - data.Q4);
		var Q5 = Math.abs(lisa.Q5 - data.Q5);
		var Q6 = Math.abs(lisa.Q6 - data.Q6);
		var Q7 = Math.abs(lisa.Q7 - data.Q7);
		var Q8 = Math.abs(lisa.Q8 - data.Q8);
		var Q9 = Math.abs(lisa.Q9 - data.Q9);
		var Q10 = Math.abs(lisa.Q10 - data.Q10);


		var currentDiff = Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7 + Q8 + Q9 + Q10;

		//add each absolute difference to the current total diff
		}; //end of for loop
	}; //end of evalFriend 


}); //end of document ready



