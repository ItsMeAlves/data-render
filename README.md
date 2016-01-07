# data-render
A Express.js middleware that pass data to templates automatically through render.

# Install it
<code>npm install data-render --save</code>

# Use it
You can do this in two ways. The first one is:

	var express = require('express');
	var dataRender = require('data-render');
	var app = express();
	
	//Use it as a middleware and pass your data as a object
	//Pass as the object key the property you want to call inside the template
	app.use(dataRender({
		pageContent: 'Some text here',  //Its value has to be a string
		userAuthenticated: {            //But if you wish to eval this string, make another object with content and eval keys
	    	content:'request.user',       //The content key stores your data
	    	eval: true                    //eval key verifies if data has to be evaluated
		}
	}));

Or, you can pass it in routing:


	var data = {
		pageContent: 'Some text here,
	  	userAuthenticated: {
	 		content:'request.user',
	    	eval: true
		}
	};
	
	app.get('/your/route', dataRender(data), function(req, res) {
	 	res.render('your/template);
	});


A sample ejs template could be one like this:



	<h1>Welcome</h1>
	<p><%= pageContent %></p> <!-- uses the key name -->
	<p>Username: <%= userAuthenticated.username %>


&copy; Gabriel Alves (ItsMeAlves)
