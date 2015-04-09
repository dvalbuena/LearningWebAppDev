var redis = require("redis"), //require redis module
	http = require("http"),
	express = require("express"),
	app = express();
var defaultUrl = "localhost:3000/";

//client to connect to redis
client = redis.createClient();
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);


//The following link is use as a reference to complete the assignment
//http://www.sitepoint.com/using-redis-node-js/

//listen for connect events
client.on('connect',function(){
	console.log('connected');
})


//generate a random number to convert to base 36
var randValue = function(){
	//will return a random base 36 string
	return (Math.floor((Math.random() * (1000000000-1000)) +1000).toString(36));
}


//display the results
app.post('/origUrl', function(req,res){
	var urlInput = req.body.origUrl;
	var shortened = randValue();
	//make an object for short and orig link
	var results = {"orig": "", "shortUrl":""};

	//check user input, display error if url is "localhost:3000 only"
	client.get(urlInput, function(err, result){
		if(result === null && urlInput.substring(0,14) === defaultUrl){
			console.log("error");
			res.send("localhost:3000 is not valid")
		}else if(urlInput === null){ //if original link does not exist store it
			//set the original link to shortened value in redis
			//vice versa
			client.set(urlInput, shortened);
			client.set(shortened, urlInput);

			//store the shortened and original link to object
			response.orig = urlInput;
			response.shortUrl = shortened;

			res.json(response);
			console.log(response);
		}else if(urlInput.substring(0,14) === defaultUrl){
			response.orig = urlInput;
			response.shortUrl = result;

			res.json(response);
			console.log(response);

		}else{//return orig link for shortened url
			response.orig = result;
			response.shortUrl = urlInput;

			res.json(response);
			console.log(response);
		}
	});
});

//search redis if short link exist, 
app.get(':/suffix',function(req,res){
	//retrieve the shorten link
	shortenedUrl = "localhost:3000/" + req.params.suffix;
	console.log(shortenedUrl);
	client.get("nameOfURL",function(err,URL){
		//check to make sure there is no error
		if(err !==null){
			console.log("ERROR: " + err);
			//exit
			return;
		}else if(URL === null){
			res.send("unable to find link")
		}else{
			//open the shortened link to the original link
			res.redirect("http://" + URL);

			client.get("count: " + shortenedUrl, function(err, URL){
				if (URL === null){
					//if shortened link not in redis add to database
					//and increment counter
					client.set('count:' + shortenedUrl, 1);
					client.add('count', 1, shortenedUrl);
				}else{
					//if link already exist, increment counter.
					client.zincrby('count',1,shortenedUrl);
				}
			});
		}
	});
});

//https://ricochen.wordpress.com/2012/02/28/example-sorted-set-functions-with-node-js-redis/
//used code to convert to javascript object to respond
app.post("/topTenLink", function (req, res) {
  client.zrevrange('counter', 0, -1, function (err, URL) {
    var lists =_.groupBy(URL, function(a,b) {
      return b;
      // return Math.floor(b/2);
    });
    res.json(JSON.stringify(lists));
    console.log(lists);
    //console.log(_.toArray(lists));
  });


});
module.exports = app;