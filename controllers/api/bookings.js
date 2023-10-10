const Booking = require('../../models/booking');
const nodemailer = require('nodemailer');

async function index(req, res) {
    const bookings = await Booking.find({}).sort('name').exec();
    res.json(bookings);
}

async function create(req, res) {
    const booking = await Booking.create(req.body);
    console.log(booking);

    let mailOptions = {
        from: 'chriskildunnese@gmail.com',
        to: 'chriskildunne@gmail.com',
        subject: 'New Booking Recieved',
        text: `Name: ${booking.name}, Client Phone: ${booking.phone} Date: ${booking.date}, Description: ${booking.description}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json(booking);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    logger: true,
    debug: true,
    secure: true,
    secureConnection: false,
    auth: {
        user: 'chriskildunnese@gmail.com',
        pass: 'nsrt czwj mjym xabd'  
    },
    tls: {
        rejectUnauthorized: true
    }
});

module.exports = {
    index,
    create
};
