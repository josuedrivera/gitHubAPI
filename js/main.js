console.log("connected");

/*
// jQuery method
// set a variable to make a request to github's server
var myRequest = $.get('https://api.github.com/users');


myRequest.done(
	function(data) {
		for(i = 0; i < data.length; i++) {
		// console.log(data);
		// console.log(data[0].login);
		console.log(data[i].login);
		}

	}
	)
*/


/*
// AJAX method
document.getElementById('myBtn').addEventListener('click', function(){

// ajax uses an object inside a function
	$.ajax({
		url: "https://api.github.com/users",
		dataType: "json",
		success: function(data) {
// anything you need to do you write within this function
			// this first line displays the first log in name
			document.body.innerHTML = data[0].login
			console.log(data);
		},

		type: "GET"
	})

})
*/


/*
// JavaScript method
// create an API object and request
let myRequest = new XMLHttpRequest();
// call the function
// .open(method, url, async)
myRequest.open('GET', 'https://api.github.com/users', true);

myRequest.onload = function(data){
	// 200 means everything is ok and data can be retrieved
	if(this.status === 200){
		var mydata = JSON.parse(this.response);

// display all of the names
		for(i = 0; i < mydata.length; i++){
		document.body.innerHTML += "<h2>" + mydata[i].login + "</h2>";
		document.body.innerHTML += "<img src=" + mydata[i].avatar_url + ">";
		}

	console.log(mydata);
}
}
// send request to the server
myRequest.send();
*/
















