// 3rd Party Modules 
const express = require('express'); 
const bodyParser = require('body-parser');
require('dotenv/config'); 

// Local Modules 
const myRoute = require('./routes/myRoute'); 

// Server Initialization 
const app = express(); 
const PORT = process.env.PORT;
const users = [];

// Middlewares 
app.use(express.json()); 

// Routes will be written here 
app.use('/route', myRoute);


// Server Listen Along with Database 
// connection(in case of data persistence) 
app.listen(PORT, async (error) =>{
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
);
