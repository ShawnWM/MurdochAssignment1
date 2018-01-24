var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get("/",function(req, res){
	res.send("");
	
});

app.get("/games",function(req, res){
	res.send("Hello Games!");
	
});

//--Listen on the port--//
app.listen(port, function(){
	console.log("Server is running on port " + port);
	
});