var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' )
var fs = require( 'fs' );
var app = express();

app.use( bodyParser() );
app.use( methodOverride( '_method' ) )
app.use( express.static( __dirname + '/public' ) );

var books = JSON.parse(fs.readFileSync( 'nytList.json', 'utf8' ));

app.get('/books', function ( req, res ) {
	res.render( 'index.ejs', {
		books: books
	} )
} );

app.get('/book/:id', function ( req, res ) {
	console.log("got a request for "+ req.params.id  );
	var thisBook = books[ req.params.id ]
	res.render( 'show.ejs', {
		thisBook: thisBook
	} )
} );


app.post('/book', function ( req, res ) {
	var book = {
		id: counter,
		title: req.body.title,
		author: req.body.author,
		isbn: "",
		description: ""
	};
	books[ counter ] = book;
	counter++
	console.log( books.counter );
	res.method = 'get';
	// fs.writeFile( 'nytList.json', JSON.stringify( books ) )
	res.redirect( '/books' );
} );


app.put('/book/:id', function ( req, res ) {
	books[ req.params.id ].title = req.body.newTitle;
	books[ req.params.id ].author = req.body.newAuthor;
	req.method = 'get';
	// fs.writeFile( 'nytList.json', JSON.stringify( books ) )
	res.redirect( '/book/' + req.params.id )
} );


app.delete('/book/:id', function ( req, res ) {
	delete books[ req.params.id ];
	req.method = 'get';
	// fs.writeFile( 'nytList.json', JSON.stringify( books ) )
	res.redirect( '/books' );
} );

app.listen( 3000 );

console.log( "Server listening on port: 3000" );