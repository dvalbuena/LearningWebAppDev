var main = function (){
	"use strict";

	var short_link,
	origUrl;

	var randValue = function(){
	//will return a random base 36 string
	var x =	Math.floor((Math.random() * (1000000000-1000)) + 1000).toString(36);
	console.log(x)
	return (x);
	};

	$(".short-input").click(function(){
		//create an object to store url
		var url = {"origUrl":""};
		url.origUrl = $(".shortUrl").val();
		//var defaultUrl = "localhost:3000/";
		console.log(url);
		//pass the value to the server side
		$.post('origUrl', url, function(response){
			//display results here
			$(".result").append($("<p>").append("Original URL: " + response.orig));
			$(".result").append($("<p>").append("Shortened URL: " + response.shortUrl));
			
		});
	});

	setInterval(function(){ 
		$('.TopUrl').empty();
		/// show login users 
		$.ajax({
			url:"/topTenLink",
			error : function () {

			},dataType: "json",
			success: function (result) {
				var data = JSON.parse(result);
				var i;
				for (i = 0; i < 10; i++) {
					$('.topListHere').append($('<p>').append(data[i]));
				}
				console.log(data[0][1]);
			},type: "post"
		});}, 3000);
};

$(document).ready(main);
