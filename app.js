var express = require('express')
	mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

app.use('/api', bookRouter);

bookRouter.route('/Books')
	.get(function(req, res){
		var query = {};
	
		if(req.query.genre)
		{
			query.genre = req.query.genre;
		}

		Book.find(query, function(err,books){
			if(err){
				//console.log(err);
				res.status(500).send(err);
			}
			else{
				res.json(books);
				console.log("Request Processed");
				//console.log(books)
			}
		});
	});
	

bookRouter.route('/Books/:bookId')
	.get(function(req,res){

		Book.findById(req.params.bookId, function(err,book) {
			if(err) {
				res.status(500).send(err);
			}
			else {
				res.json(book);
				console.log("Request Processed");
			}
		});
	});

app.get('/', function(req, res){
	res.send('welcome to my api');
});

app.listen(port, function(){
	console.log('Gulp is running my app on PORT: ' + port);
})
