const Booking = require ('../../models/booking')

async function index(req,res) {
    const bookings =  await Booking.find({}).sort('name').exec();
    res.json(bookings)
}
async function create(req, res) {
    const booking = await Booking.create(req.body);
    console.log(booking);
    res.json(booking);
}


module.exports = {
    index,
    create
}