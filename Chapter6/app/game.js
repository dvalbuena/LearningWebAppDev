var http = require("http"),
	server,
	outcome = "",
	win = 0,
	lose = 0,
	tie = 0,
	result;

var gameStart = function(selected){
	var playerChoice =["rock", "paper", "scissors", "lizard", "spock"];
	var something = Math.floor((Math.random()* playerChoice.length));
	var compChoice = playerChoice[something];

		if(compChoice === selected){
			outcome = "tie";
			tie +=1;
		}else if(selected === "rock" && compChoice === "lizard" || compChoice === "scissors"){
			//player wins
			outcome = "win";
			win +=1;
		}else if(selected === "rock" && compChoice === "paper" || compChoice === "spock"){
			//player loses
			outcome = "lose";
			lose +=1
		}else if(selected === "paper" && compChoice === "rock" || compChoice === "spock"){
			//player wins
			outcome = "win";
			win +=1;
		}else if(selected === "paper" && compChoice === "scissors" || compChoice === "lizard"){
			//player loses
			outcome = "lose";
			lose +=1;
		}else if(selected === "scissors" && compChoice === "paper" || compChoice === "lizard"){
			//player wins
			outcome = "win";
			win +=1;
		}else if(selected === "scissors" && compChoice === "spock" || compChoice === "rock"){
			//player loses
			outcome = "lose";
			lose +=1;
		}else if(selected === "lizard" && compChoice === "paper" || compChoice === "spock"){
			//player wins
			outcome = "win";
			win +=1;
		}else if(selected === "lizard" && compChoice === "rock" || compChoice === "scissors"){
			//player loses
			outcome = "lose";
			lose +=1;
		}else if(selected === "spock" && compChoice === "rock" || compChoice === "scissors"){
			//player wins
			outcome = "win";
			win +=1;
		}else if(selected === "spock" && compChoice === "paper" || compChoice === "lizard"){
			//player loses
			outcome = "lose";
			lose +=1;
		}
};

server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type": "application/json"});
	if(req.method === "POST"){
		if(req.url === "/play/rock"){
			gameStart("rock");
			result = '{"outcome":"'+outcome+'","wins":"'+win+'", "loses":"'+lose+'","ties":"'+tie+'"}'; 
			res.write(result);			
		}else if(req.url === "/play/paper"){
			gameStart("paper");
			result = '{"outcome":"'+outcome+'","wins":"'+win+'", "loses":"'+lose+'","ties":"'+tie+'"}'; 
			res.write(result);
		}else if(req.url === "/play/scissors"){
			gameStart("scissors");
			result = '{"outcome":"'+outcome+'","wins":"'+win+'", "loses":"'+lose+'","ties":"'+tie+'"}'; 
			res.write(result);
		}else if(req.url === "/play/lizard"){
			gameStart("lizard");
			result = '{"outcome":"'+outcome+'","wins":"'+win+'", "loses":"'+lose+'","ties":"'+tie+'"}'; 
			res.write(result);
		}else if(req.url === "/play/spock"){
			gameStart("spock");
			result = '{"outcome":"'+outcome+'","wins":"'+win+'", "loses":"'+lose+'","ties":"'+tie+'"}'; 
			res.write(result);
		}else{
			res.end("please type the correct path");
		}
		res.end();
	}
});


server.listen(3000);
console.log("server listening to port 3000");