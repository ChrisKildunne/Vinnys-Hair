const Booking = require('../../models/booking');
const nodemailer = require('nodemailer');
const twilio = require('twilio')

const twilioClient =  twilio('AC0bb68bf481d65888002ad39f5259e210','3bc8640cc2c9b0de5583e3dd96c54ee8')

async function index(req, res) {
    const bookings = await Booking.find({}).sort('name').exec();
    res.json(bookings);
}

async function create(req, res) {
    const booking = await Booking.create(req.body);

    let mailOptions = {
        from: 'chriskildunnese@gmail.com',
        to: 'chriskildunne@gmail.com',
        subject: 'New Booking Recieved',
        text: `Name: ${booking.name}, Client Phone: ${booking.phone} Date: ${booking.date}, Description: ${booking.description}`
    };
    try{
        await twilioClient.messages.create({
            body: 'Thank you for your booking! We will contact you shortly.',
            to: `+1${booking.phone}`,  
            from: '+18552741067'
        });
    }catch(error){
        console.error('Error sending SMS:', error);
        res.status(500).json({ error: 'Failed to send SMS' });
    }


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
