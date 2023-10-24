const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

const Booking  =  mongoose.model('Booking', bookingSchema)

module.exports = Booking;