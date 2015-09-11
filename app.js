var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

app.use('/api', bookRouter);

bookRouter.route('/Books')
	.get(function(req, res){
		var responseJson = {
			hello: "This is my api",
			darin: "You suck!"
		};
		
		res.json(responseJson);
	});
	

app.get('/', function(req, res){
	res.send('welcome to my api');
});

app.listen(port, function(){
	console.log('Gulp is running my app on PORT: ' + port);
})