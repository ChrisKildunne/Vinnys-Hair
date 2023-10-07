// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user')
const Product = require('./models/product');
const Order = require('./models/order');
const Booking = require('./models/booking');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;