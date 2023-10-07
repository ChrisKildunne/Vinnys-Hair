import { useState, useEffect } from 'react';
import * as bookingsAPI from '../../utilities/bookings-api';  // Consider renaming if you create a separate API module

export default function ContactPage() {
    const [booking, setBooking] = useState({
        name: '',
        date: '',
        description: ''
    });
    const [submit, setSubmit] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('data', booking)
        const result = await bookingsAPI.createBooking(booking);
        setBooking({
            name: '',
            date: '',
            description: '',
        })
        setSubmit(true)
    };

    return (
        <div>
            <h1>Bookings</h1>
            {submit &&<p>Booking recieved</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    />
                </label>
                <label>
                    Date:
                    <input 
                        type="date"
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    />
                </label>
                <label>
                    Description:
                    <input 
                        type="text" 
                        value={booking.description}
                        onChange={(e) => setBooking({ ...booking, description: e.target.value })}
                    />
                </label>
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}
