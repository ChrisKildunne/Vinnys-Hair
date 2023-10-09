const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

require('./config/database');


const app = express();
app.use(cookieParser());

const stripe = require('stripe')(process.env.SECRET_KEY)
   
app.use(logger('dev'));
app.use(express.json());

app.use((req, res, next) => {
    if (!req.cookies.cartId) {
        res.cookie('cartId', uuidv4(), { maxAge: 24 * 60 * 60 * 1000 }); // 1 day expiration for example
    }
    next();
});
	
 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));
 
 app.use(require('./config/checkToken'))

 const port = process.env.PORT || 3001;

//PUT API routes here, before catch all routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/products', require('./routes/api/products'))
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/reviews', require('./routes/api/reviews'))
app.use('/api/bookings', require('./routes/api/bookings'))


//The following "catch all: toure (note the *) is necessary
//to reture the index.html on all non-AJAX/API requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


 app.listen(port, function(){
    console.log( `Express app running on port ${port}`)
 })