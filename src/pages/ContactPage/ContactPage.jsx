import { useState, useEffect } from 'react';
import * as bookingsAPI from '../../utilities/bookings-api';
import './ContactPage.css'

export default function ContactPage() {
    const [booking, setBooking] = useState({
        name: '',
        date: '',
        description: ''
    });
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('data', booking);
        const result = await bookingsAPI.createBooking(booking);
        setBooking({
            name: '',
            date: '',
            description: '',
        });
        setSubmit(true);
    };

    return (
        <div className="container mt-5">
            <h1>Bookings</h1>
            {submit && <p>Booking received</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date:</label>
                    <input 
                        type="datetime-local"
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea 
                        value={booking.description}
                        onChange={(e) => setBooking({ ...booking, description: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className='container mt-5'>
                    <button type="submit" className="btn custom-btn">Submit Booking</button>
                </div>
            </form>
        </div>
    );
}
