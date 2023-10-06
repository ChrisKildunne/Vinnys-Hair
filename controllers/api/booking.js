const Booking = require ('../../models/booking')

async function index(req,res) {
    const bookings =  await Booking.find({}).sort('name').exec();
    res.json(bookings)
}

module.exports = {
    index
}